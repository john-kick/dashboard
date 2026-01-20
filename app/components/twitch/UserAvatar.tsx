import { useSession } from "@node_modules/next-auth/react";
import Image from "next/image";

export default function UserAvatar() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div>
      <Image
        src={session.user!.image!}
        width={150}
        height={150}
        alt="User Avatar"
      />
    </div>
  );
}
