"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/InputNy";
import { Label } from "@/components/LabelNy";
import { Button } from "@/components/ButtonNy";
import { Icons } from "@/components/Icons";
import { emailValidator } from "@/lib/validators/email";
import { passwordValidator } from "@/lib/validators/password";
import { loginEmail } from "@/services/auth";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [email, setEmail] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<string>("");

  const [password, setPassword] = React.useState<string>("");
  const [passwordError, setPasswordError] = React.useState<string>("");

  const [formError, setFormError] = React.useState<string>("");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    const emailValidation = emailValidator(email);
    const passwordValidation = passwordValidator(password);
    try {
      if (emailValidation.error) {
        setEmailError(emailValidation?.message as string);
        setIsLoading(false);
        return;
      }
      if (passwordValidation.error) {
        setPasswordError(passwordValidation?.message as string);
        setIsLoading(false);
        return;
      }

      const response = await loginEmail(email, password);
      console.log("response", response);
      if (response?.token) {
        localStorage.setItem("userToken", response?.token);

        setIsLoading(false);
        setFormError("");
        window.location.href = "/";
      } else {
        // TODO set snackbar error
        console.log("response error", response?.message);
        setIsLoading(false);
        setFormError(response.message);
      }
    } catch (error) {
      console.log(error);
      setFormError("An error occurred, please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={isLoading}
            />
            <Input
              id="password"
              placeholder="******"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={isLoading}
            />
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
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
    </div>
  );
}
