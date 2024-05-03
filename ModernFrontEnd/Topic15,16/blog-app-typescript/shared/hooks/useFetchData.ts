import { useEffect, useState } from "react";
import { AxiosPromise, AxiosResponse } from "axios";

interface FetchDataType<T> {
  requestFn: () => AxiosPromise<T>;
  onError?: (error: unknown) => void;
  onSuccess?: (data: T) => void;
  condition?: boolean;
  dependency?: any[];
}

export const useFetchData = <T>({
  requestFn,
  dependency = [],
  condition,
  onSuccess,
  onError,
}: FetchDataType<T>) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    if (condition) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await requestFn();
        setData(res.data);
        onSuccess?.(res.data);
      } catch (err: unknown) {
        setError(err);
        onError?.(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      // Clean-up code here
    };
  }, [...dependency]);

  return { data, loading, error, setData };
};
