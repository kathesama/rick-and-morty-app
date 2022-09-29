import { AxiosRequestConfig } from 'axios';

export interface AxiosResponse {
  config: AxiosRequestConfig;
  data: any;
  headers: any;
  request: any;
  status: number;
  statusText: string;
  message: string;
}