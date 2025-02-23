"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
export default function Home() {
  const session = useSession();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>
        {session.status === "authenticated" ? (
          <div>
            <div>
              <button
                type="button"
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </button>
            </div>
            <h1>Hello {session.data?.user?.name}</h1>
            <div>You are logged in</div>
          </div>
        ) : (
          <div>
            <Link href="/api/auth/signin">Sign in</Link>
          </div>
        )}
      </h1>
    </div>
  );
}
