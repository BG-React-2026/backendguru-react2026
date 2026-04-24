import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => console.log(e));
  }, [url]);

  return data;
};
