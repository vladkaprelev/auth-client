import API from "@/api/API";

class Auth extends API {
  registration(data: Record<string, any>, endpoint: string): Promise<any> {
    return this.post(data, endpoint);
  }

  authorization(data: Record<string, any>, endpoint: string): Promise<any> {
    return this.post(data, endpoint);
  }

  logout(data: Record<string, any>, endpoint: string): Promise<any> {
    return this.post(data, endpoint);
  }

  getUsers(data: Record<string, any>, endpoint: string): Promise<any> {
    return this.get(data, endpoint);
  }

  refresh(data: Record<string, any>, endpoint: string): Promise<any> {
    return this.get(data, endpoint);
  }
}

export default Auth;
