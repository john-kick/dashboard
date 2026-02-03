import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function User(): React.JSX.Element | null {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <Link
      href={`https://twitch.tv/${session.user.name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="flex items-center gap-3 transition-transform group-hover:scale-105">
        <Image
          src={session.user.image!}
          width={40}
          height={40}
          alt="User logo"
          className="rounded-full"
        />
        <span className="font-medium group-hover:text-purple-400 transition-colors">
          {session.user.name}
        </span>
      </div>
    </Link>
  );
}
