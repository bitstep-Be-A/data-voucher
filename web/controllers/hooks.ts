import { useEffect, useCallback } from "react";
import { useRecoilState, RecoilState } from "recoil";

import { DataStore } from "@/recoil/store";
import { IController, IObjectController } from ".";
import { useAuthToken } from "@/recoil/hooks/auth.hook";
import { Key } from "@/models/types";

export const useController = <T>(
  controller: IController<T>,
  store: RecoilState<DataStore<T>>,
  initContext?: {
    filter?: object;
    key?: Key;
  }
): IObjectController<T> => {
  const token: string = useAuthToken();

  const [storeState, setStoreState] = useRecoilState(store);
  const { isFetched, loading } = storeState;

  const initData = useCallback(async () => {
    if (controller.get) {
      const data = await controller.get(initContext?.key, token);
      setStoreState({
        ...storeState,
        isFetched: false,
        item: data
      });
    }
    else if (controller.list) {
      const data = await controller.list(initContext?.filter, initContext?.key, token);
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

  const add = useCallback(async (data: T) => {
    setStoreState({
      ...storeState,
      loading: true
    });
    await controller.create(data, token);
    setStoreState({
      ...storeState,
      isFetched: true
    });
  }, [storeState, setStoreState]);

  const modify = useCallback(async (data: T, key: Key) => {
    setStoreState({
      ...storeState,
      loading: true
    });
    await controller.update(data, key, token);
    setStoreState({
      ...storeState,
      isFetched: true
    });
  }, [storeState, setStoreState]);

  const remove = useCallback(async (key: Key) => {
    setStoreState({
      ...storeState,
      loading: true
    });
    await controller.destroy(key, token);
    setStoreState({
      ...storeState,
      isFetched: true
    });
  }, [storeState, setStoreState]);

  return { add, modify, remove }
}
