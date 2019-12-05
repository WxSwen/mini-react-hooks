import { useState, useEffect, useRef } from "react";

export default opts => {
  let { initData, initLoading = true, fetchFn } = opts;
  let [data, setData] = useState(initData);
  let [isLoading, setIsLoading] = useState(initLoading);
  let [isError, setIsError] = useState(false);
  let fetchApi = useRef(fetchFn);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let data = await fetchApi.current();
        setData(data);
        setIsLoading(!isLoading);
      } catch (err) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return [{ data, isLoading, isError }];
};

// DEMO
// const [{ data, isLoading }] = useFetch({
//   initData: {},
//   fetchFn: () => axios.post(url)
// });
