import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

  const getFetch = async () => {

    setState({
        // Lo desestructuramos pok solo queremos afectar el "isloading" property
        ...state,
        isLoading: true
    });

    const resp = await fetch(url);
    const data = await resp.json();
    
    setState({
        data: data,
        isLoading: false, 
        hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data:       state.data,
    isLoading:  state.isLoading,
    hasError:   state.hasError,
  };
};
