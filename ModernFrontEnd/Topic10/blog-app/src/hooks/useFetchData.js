import { useEffect, useState } from "react";

export const useFetchData = ({
  requestFn,
  dependecy = [],
  condition,
  onSuccess,
  onError,
}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (condition) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await requestFn();
        setData(res.data);
        onSuccess?.(res.data);
      } catch (err) {
        setError(err);
        onError?.(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [...dependecy]);

  return { data, loading, error, setData };
};
