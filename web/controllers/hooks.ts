import { useEffect, useCallback, useState } from "react";
import { useRecoilState, RecoilState } from "recoil";

import { DataStore } from "@/recoil/store";
import { IController, IObjectController } from ".";
import { useAuthToken } from "@/recoil/hooks/auth.hook";
import { Key } from "@/models/types";
import { ErrorDetail } from "@/exceptions";

export const useController = <Model, Data>(
  controller: IController<Model, Data>,
  store: RecoilState<DataStore<Model>>,
  initContext?: {
    filter?: object;
    key?: Key;
  }
): IObjectController<Data> => {
  const token = useAuthToken() ?? '';

  const [storeState, setStoreState] = useRecoilState(store);
  const { isFetched, loading } = storeState;

  const [errors, setErrors] = useState<ErrorDetail[]>([]);

  const initData = useCallback(async () => {
    if (controller.get) {
      const data = await controller.get(token);
      if (!!data) {
        setStoreState({
          ...storeState,
          isFetched: false,
          item: data
        });
      }
    }
    else if (controller.list) {
      const data = await controller.list(initContext?.filter, token);
      setStoreState({
        ...storeState,
        loading: false,
        isFetched: false,
        list: data
      });
    }
  }, [storeState, setStoreState]);

  useEffect(() => {
    if (isFetched) {
      initData();
    }
  }, [isFetched]);

  const add = useCallback(async (data: Data) => {
    setStoreState({
      ...storeState,
      loading: true
    });
    await controller.create(data, token);
    if (controller.isValid()) {
      setStoreState({
        ...storeState,
        isFetched: true
      });
    } else {
      setErrors(controller.errors);
    }
  }, [storeState, setStoreState]);

  const modify = useCallback(async (data: Data, key: Key) => {
    setStoreState({
      ...storeState,
      loading: true
    });
    await controller.update(data, key, token);
    if (controller.isValid()) {
      setStoreState({
        ...storeState,
        isFetched: true
      }); 
    } else {
      setErrors(controller.errors);
    }
  }, [storeState, setStoreState]);

  const remove = useCallback(async (key: Key) => {
    setStoreState({
      ...storeState,
      loading: true
    });
    await controller.destroy(key, token);
    if (controller.isValid()) {
      setStoreState({
        ...storeState,
        isFetched: true
      });
    } else {
      setErrors(controller.errors);
    }
  }, [storeState, setStoreState]);

  return { add, modify, remove, errors, loading }
}
