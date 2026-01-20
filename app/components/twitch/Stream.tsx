import { useEffect, useState } from "react";
import Link from "@node_modules/next/link";
import Image from "next/image";

type StreamProps = {
  user_id: string;
  user_name: string;
  title: string;
  thumbnail: string;
  game: string;
};

const THUMBNAIL_WIDTH = 350;
const THUMBNAIL_HEIGHT = 220;

export default function Stream({
  user_id,
  user_name,
  title,
  thumbnail,
  game,
}: StreamProps): React.JSX.Element {
  const [profilePicture, setProfilePicture] = useState<string | undefined>();

  useEffect(() => {
    fetch(`/api/twitch/users?user_id=${user_id}`)
      .then((res) => res.json())
      .then((res) => {
        setProfilePicture(res);
      });
  }, [user_id]);

  const thumbnailUrl = thumbnail
    .replace("{width}", String(THUMBNAIL_WIDTH))
    .replace("{height}", String(THUMBNAIL_HEIGHT));

  return (
    <div className="transform transition w-72 flex-none hover:scale-105">
      <h5
        className="overflow-hidden text-nowrap text-ellipsis mb-2 font-bold"
        title={title}
      >
        {title}
      </h5>
      <span className="">{game}</span>
      <Link href={`https://www.twitch.tv/${user_name}`}>
        <Image
          src={thumbnailUrl}
          alt="Stream preview"
          width={THUMBNAIL_WIDTH}
          height={THUMBNAIL_HEIGHT}
          className="rounded-xl mt-2 mb-2 border-purple-600 border-2 shadow-purple-900 shadow-lg cursor-pointer"
        />
      </Link>
      <div className="inline-flex items-center">
        {profilePicture ? (
          <Image
            src={profilePicture}
            width={40}
            height={40}
            alt="Profile logo"
            className="rounded-full mr-2"
          />
        ) : (
          <></>
        )}
        <span className="">{user_name}</span>
      </div>
    </div>
  );
}
