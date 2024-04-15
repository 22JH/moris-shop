import { useReducer, useEffect } from "react";

interface UseAsyncStateType<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
}

type UseAsyncActionType<T> =
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: T }
  | { type: "ERROR"; error: Error };

function useAsync<T>(
  callback: () => Promise<T>,
  deps = []
): [UseAsyncStateType<T>, () => Promise<void>] {
  const initialState: UseAsyncStateType<T> = {
    loading: false,
    data: null,
    error: null,
  };

  function reducer(
    state: UseAsyncStateType<T>,
    action: UseAsyncActionType<T>
  ): UseAsyncStateType<T> {
    switch (action.type) {
      case "LOADING":
        return {
          loading: true,
          data: null,
          error: null,
        };
      case "SUCCESS":
        return {
          loading: false,
          data: action.data,
          error: null,
        };
      case "ERROR":
        return {
          loading: false,
          data: null,
          error: action.error,
        };
      default:
        throw new Error(`없는 케이스를 넣었습니다.`);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: "ERROR", error: e });
      } else {
        dispatch({ type: "ERROR", error: new Error("에러 발생") });
      }
    }
  };

  useEffect(() => {
    fetchData();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}

export default useAsync;
