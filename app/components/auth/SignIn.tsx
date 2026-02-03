import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button
      onClick={() => signIn("twitch")}
      className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500 transition-colors cursor-pointer"
    >
      Sign in with Twitch
    </button>
  );
}
