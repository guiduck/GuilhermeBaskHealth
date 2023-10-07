import { AxiosResponse } from "axios";
import apiNext from "./apiNext";

export async function loginEmail(
  email: string,
  password: string
): Promise<any> {
  try {
    const response = await apiNext.post("/api/login", {
      email,
      password,
    });
    if (response.status === 200) {
      localStorage.setItem("userToken", response.data.token);
      return response?.data;
    }
    console.log(response.data);
  } catch (error) {
    return error;
  }
}

export async function logoutUser() {
  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    cookies().delete("userToken");
  } else {
    localStorage.removeItem("userToken");
    const { data }: AxiosResponse<{ redirect?: string }> = await apiNext.get(
      "/api/logout"
    );
    if (data.redirect) {
      window.location.href = data.redirect;
    }
  }
}
