"use client";

import { useEffect } from "react";

export default function ErrorFallback({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <a href="/">an error occurred, click here to go back to the home page</a>
    </div>
  );
}
