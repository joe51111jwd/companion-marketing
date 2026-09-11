import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";
import { Wordmark } from "@/components/wordmark";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center justify-center py-24"
    >
      <div className="container-prose text-center">
        <div className="flex justify-center">
          <Wordmark />
        </div>
        <h1 className="h2 mt-8 text-fg">This page moved, or never existed.</h1>
        <p className="lede mt-4">
          Nothing was lost. Start from the overview and the rest of the site is one click away.
        </p>
        <div className="mt-12 flex justify-center">
          <Link href="/" className={buttonStyles("primary", "md")}>
            Back to the overview
          </Link>
        </div>
      </div>
    </main>
  );
}
