import axios from "axios";

export async function loginEmail(
  email: string,
  password: string
): Promise<any> {
  try {
    const response = await axios.post("/api/login", {
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
