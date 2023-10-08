"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/InputNy";
import { Label } from "@/components/LabelNy";
import { Button } from "@/components/ButtonNy";
import { Icons } from "@/components/Icons";
import { loginEmail } from "@/src/services/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type LoginFormType = {
  email: string;
  password: string;
};

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  async function onLogin(data: LoginFormType) {
    setIsLoading(true);
    const { email, password } = data;
    try {
      const response = await loginEmail(email, password);
      if (response?.token) {
        localStorage.setItem("userToken", response?.token);
        setIsLoading(false);
        console.log("oioioi");
        router.push("/");
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onLogin)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              placeholder="name@example.com"
              type="email"
              disabled={isLoading}
              {...register("email", {
                required: "Required field",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-700">{errors.email.message}</p>
            )}
            <Input
              placeholder="******"
              type="password"
              disabled={isLoading}
              {...register("password", { required: "Required field" })}
            />
            {errors.password && (
              <p className="text-red-700">{errors.password?.message}</p>
            )}
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-2 text-muted-foreground">
            or register below
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : undefined}{" "}
        Register
      </Button>
    </div>
  );
}
