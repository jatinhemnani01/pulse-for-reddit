import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function LogOut() {
  const session = useSession();

  if (session.status === "authenticated") {
    return (
      <li>
        <Link onClick={() => signOut()} className="mr-2" href={""}>
          Log Out
        </Link>
      </li>
    );
  }

  return;
}
