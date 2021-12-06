import { baseURL } from "@/globalVarible/globalVarible";
import instanceAxios from "@/api/axios";

interface InterfaceAPI {
  baseUrl: string;

  post(data: Record<string, any>, endpoint: string): Promise<any>;
}

abstract class API implements InterfaceAPI {
  baseUrl: string;

  constructor() {
    this.baseUrl = baseURL;
  }

  post(data: Record<string, any>, endpoint: string): Promise<any> {
    return instanceAxios.post("/login", data);
  }
}

export default API;
