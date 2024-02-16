'use client';   

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: any;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);



  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Oops! Something went wrong.</h1>
      <button className="btn btn-square btn-primary w-auto px-2" onClick={reset}>
        TRY AGAIN
      </button>
    </div>
  );
}
