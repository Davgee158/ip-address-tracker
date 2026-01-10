import { useState, useEffect } from "react";


function useIpData(query) {
  const BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isIP = (str) => /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(str);

  useEffect(() => {
    async function fetchData() {
      try {
        let url;
        if (query) {
          if (isIP(query)) {
            url = `${BASE_URL}&ipAddress=${query}`;
          } else {
            url = `${BASE_URL}&domain=${query}`;
          }
        } else {
          url = BASE_URL;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [query, BASE_URL]);

  return { data, loading, error };
}

export default useIpData;
