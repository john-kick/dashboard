import { useEffect, useState } from "react";
import Link from "next/link";
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
  const [profilePicture, setProfilePicture] = useState<string>();

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
    <Link
      href={`https://www.twitch.tv/${user_name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="w-72 flex-none overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/40">
        {/* Thumbnail */}
        <div className="relative overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt="Stream preview"
            width={THUMBNAIL_WIDTH}
            height={THUMBNAIL_HEIGHT}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-3">
          <h5
            className="mb-1 min-h-10 line-clamp-2 text-sm font-semibold text-white transition-colors group-hover:text-purple-400"
            title={title}
          >
            {title}
          </h5>

          <span className="text-xs text-zinc-400">{game}</span>

          <div className="mt-3 flex min-h-9 items-center gap-2 text-sm text-zinc-300">
            {profilePicture && (
              <Image
                src={profilePicture}
                width={36}
                height={36}
                alt={`${user_name} profile`}
                className="rounded-full ring-1 ring-white/10"
              />
            )}
            <span className="font-medium transition-colors group-hover:text-purple-400">
              {user_name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
