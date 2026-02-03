import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      onClick={() => signOut()}
      className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"
    >
      Sign out
    </button>
  );
}
