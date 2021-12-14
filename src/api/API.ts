import instanceAxios from "@/api/axios";

interface InterfaceAPI {
  post(data: Record<string, any>, endpoint: string): Promise<any>;

  get(data: Record<string, any>, endpoint: string): Promise<any>;

  delete(data: Record<string, any>, endpoint: string): Promise<any>;

  update(data: Record<string, any>, endpoint: string): Promise<any>;
}

interface Data {
  [key: string]: any;
}

class API implements InterfaceAPI {
  post(data: Data, endpoint: string): Promise<any> {
    return instanceAxios.post(`/${endpoint}`, data);
  }

  get(data: Data, endpoint: string): Promise<any> {
    return instanceAxios.get(`/${endpoint}`, data);
  }

  delete(data: Data, endpoint: string): Promise<any> {
    return instanceAxios.delete(`/${endpoint}`, data);
  }

  update(data: Data, endpoint: string): Promise<any> {
    return instanceAxios.put(`/${endpoint}`, data);
  }
}

export default new API();
