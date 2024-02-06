import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, { signal: abortCont.signal });

        if (!res.ok) {
          throw new Error('Something went wrong!');
        }

        const jsonData: T = await res.json();
        setData(jsonData);
      } catch (error: unknown) {
        if ((error as Error).name !== 'AbortError') {
          setError((error as Error).message);
        } else {
          console.log('Fetch aborted');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortCont.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};
