import { useSession } from "next-auth/react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function AuthButton() {
  const session = useSession();

  function LogIn() {
    return (
      <Link
        onClick={() => signIn("google")}
        className="text-white text-md mr-2 menu"
        href={""}
      >
        Log In
      </Link>
    );
  }

  function Loader() {
    return <span className="loading loading-spinner text-error"></span>;
  }

  function ShowStatus() {
    if (session.status === "loading") return <Loader />;
    else if (session.status === "authenticated") return <GoogleAvatar />;
    else return <LogIn />;
  }

  function GoogleAvatar() {
    return (
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img
            src={session.data?.user?.image || ""}
            alt={session.data?.user?.name || ""}
          />
        </div>
      </div>
    );
  }

  return <ShowStatus />;
}
