import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const USER_TOKEN = process.env.USER_TOKEN;

type userLoginType = {
  email: string;
  password: string;
};

export async function POST(request: Request) {
  const { email, password }: userLoginType = await request.json();

  // if (email !== "guiduck02@gmail.com" || password !== "admin123") {
  //   return NextResponse.json(
  //     { message: "Invalid credentials" },
  //     { status: 401 }
  //   );
  // }
  if (!email || !password) {
    return NextResponse.json(
      { message: "Missing required data" },
      { status: 400 }
    );
  }

  const response = {
    message: "User logged in successfully",
    token: USER_TOKEN,
  };

  cookies().set({
    name: "userToken",
    value: USER_TOKEN as string,
    httpOnly: true,
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return NextResponse.json(response, { status: 200 });
}
