import Link from "@node_modules/next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function User(): React.JSX.Element {
  const { data: session } = useSession();

  if (!session?.user) {
    return <></>;
  }

  return (
    <div className="inline-flex mb-3 w-full justify-end">
      <Link href={`https://twitch.tv/${session.user.name}`}>
        <div className="transform transition inline-flex items-center hover:scale-105">
          <Image
            src={session.user.image!}
            width={48}
            height={48}
            alt="User logo"
            className="rounded-full mr-3"
          />
          <span>{session.user.name}</span>
        </div>
      </Link>
    </div>
  );
}
