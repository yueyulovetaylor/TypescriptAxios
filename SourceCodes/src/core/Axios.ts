import { AxiosRequestConfig, AxiosPromise, Methods } from '../types';
import dispatchRequest from './dispatchRequest'

export default class Axios {
  request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {};
      }
      config.url = url;
    } else {
      config = url;
    }

    return dispatchRequest(config);
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("GET", url, config);
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("DELETE", url, config)
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("HEAD", url, config)
  }

  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData("OPTIONS", url, config)
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData("POST", url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData("PUT", url, data, config);
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData("PATCH", url, data, config);
  }

  _requestMethodWithoutData(
    method: Methods, url: string, config?: AxiosRequestConfig): AxiosPromise
  {
    return this.request(Object.assign(config || {}, {
      method,
      url
    }));
  }

  _requestMethodWithData(
    method: Methods, url: string, 
    data?: any, config?: AxiosRequestConfig): AxiosPromise
  {
    return this.request(Object.assign(config || {}, {
      method,
      url,
      data
    }));
  }
}