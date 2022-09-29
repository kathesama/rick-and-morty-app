/*
Created by: kathe
*/
import { useState, useCallback } from 'react';
import { AxiosResponse } from '../../models/AxiosResponse';
import axiosApi from '../../services/api/axiosApi';
// import axiosApi from '@/services/api/axiosApi';

// import { AxiosResponse } from '@/models/AxiosResponse';

const axiosResponse: AxiosResponse = {
  config: {},
  data: {},
  headers: {},
  request: {},
  statusText: 'OK',
  status: 200,
  message: 'OK',
};

const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(axiosResponse);
  const [success, setSuccess] = useState(false);

  const action = useCallback(async (requestConfig: any, applyData: any): Promise<any> => {
    try {
      setLoading(true);
      const options = {
        method: requestConfig.method ? requestConfig.method : 'GET',
        url: requestConfig.url,
        headers: requestConfig.headers ? requestConfig.headers : {},
        data: requestConfig.data ? JSON.stringify(requestConfig.data) : null,
      };

      const response = await axiosApi(options);

      if (!response) {
        throw new Error('Request failed!');
      }

      setSuccess(true);
      applyData(await response.data);
    } catch (err: any) {
      const { response, message } = err;
      setSuccess(false);
      setError({
        ...response,
        message,
      } );
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    success,
    action,
  };
};

export default useAxios;
