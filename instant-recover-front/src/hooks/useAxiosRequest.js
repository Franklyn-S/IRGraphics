import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxiosRequest = () => {
  const [response, setResponse] = useState({
    data: null,
    loading: false,
    error: true,
  });

  const performRequest = useCallback(async (options) => {
    setResponse((resp) => ({
      ...resp,
      loading: true,
    }));
    console.log(options);
    const response = await axios({
      ...options,
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(response);
    setResponse({
      data: response?.data,
      loading: false,
    });
    return response;
  }, []);

  return { response, performRequest };
};

export default useAxiosRequest;
