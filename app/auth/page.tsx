import { Metadata } from "next";
import Link from "next/link";

import { UserAuthForm } from "./components/userAuthForm";
import { ToggleMode } from "@/components/ToggleMode";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication form for Bask Health.",
};

export default async function AuthenticationPage() {
  return (
    <>
      <div className="container flex relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="absolute right-0 top-0 p-8">
          <ToggleMode />
        </div>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium gap-1">
            <img src="https://bask.health/_next/image?url=%2Fimg%2Fbask-logo.png&w=128&q=100" />
            Health
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <h1 className="!no-underline font-velasans-gx text-ds-primary-400 dark:text-ds-primary-400 font-semibold my-3 md:mb-5 md:mt-6 text-4xl md:text-5xl">
                The Platform <br></br> for E-prescribing
              </h1>
              <p className="text-lg">
                Expand into direct-to-consumer telehealth. Doctor consults.
                E-Prescribing. Pharmacy fulfilment.
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to sign in
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
