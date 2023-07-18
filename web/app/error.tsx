'use client' // Error components must be Client Components

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center">
      <div className="w-fit">
        <p className="mt-40 text-3xl">{ error.message }</p>
        <div className="w-full flex flex-row justify-between mt-10 px-2">
          <Link className="underline hover:text-blue-500" href="/">홈 바로가기</Link>
          <button
            className="underline hover:text-blue-500"
            onClick={() => router.back()}
          >뒤로가기</button>
        </div>
      </div>
    </div>
  );
}
