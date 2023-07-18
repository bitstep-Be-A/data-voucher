import Link from "next/link";

import { routes } from "@/routes";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href={routes.home.path}>Home</Link>
      </p>
    </div>
  );
}
