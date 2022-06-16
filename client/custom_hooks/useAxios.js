import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        res.data.content && setData(res.data.content);
        res.content && setData(res.content);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);
  return { data, loading, error };
}
export default useAxios;
