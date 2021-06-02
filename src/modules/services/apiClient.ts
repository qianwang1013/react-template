import axios, { AxiosInstance } from "axios";
import config from "../config";

class ApiClient {
  _axoisInstance: AxiosInstance;

  constructor(private _hostname?: string) {
    if (!_hostname) {
      throw Error("Invalid Excpetion");
    }
    this._axoisInstance = axios.create({
      baseURL: this._hostname,
    });
  }

  post = <T>(path: string, body: unknown) => {
    return this._axoisInstance.post(path, body).then((body) => body.data as T);
  };

  get = <T>(path: string) => {
    return this._axoisInstance.get<T>(path).then((body) => body.data);
  };

  put = (path: string, body: unknown) => {
    return this._axoisInstance.put(path, body).then((body) => body.data);
  };

  patch = (path: string, body: unknown) => {
    return this._axoisInstance.patch(path, body).then((body) => body.data);
  };
}

export const apiClient = new ApiClient(config.apiUrl);
