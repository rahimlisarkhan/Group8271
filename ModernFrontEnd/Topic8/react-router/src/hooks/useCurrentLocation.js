import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
  const [cord, setCord] = useState({ latitude: 0, longitude: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCord({ latitude: coords.latitude, longitude: coords.longitude });
      setLoading(false);
    });
  }, []);

  return { cord, loading };
};
