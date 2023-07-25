import { useState, useEffect } from 'react';

export const useSessionStorage = <T>(key: string, initialValue?: T) => {
  // sessionStorage에서 해당 키로 저장된 값을 가져옵니다. 없으면 초기값을 사용합니다.
  const storedValue = sessionStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // 상태와 상태 업데이트 함수를 생성합니다.
  const [state, setState] = useState<T>(initial);

  // 상태가 변경될 때마다 sessionStorage에 값을 저장합니다.
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
};
