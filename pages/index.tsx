import Navigation from "@/src/components/Navigation";
import SearchInput from "@/src/components/SearchInput";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session);

  return (
    <div>
      <div className="flex justify-center mt-5">
        <SearchInput />
        {session.status === "authenticated" ? (
          <button onClick={() => signOut()}>Log Out</button>
        ) : (
          <button onClick={() => signIn("google")}>Log In</button>
        )}
      </div>
    </div>
  );
}
