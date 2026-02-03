import { Stream as StreamType } from "@types/twitch";
import { useEffect, useState } from "react";
import Stream from "./Stream";

export default function StreamList() {
  const [streams, setStreams] = useState<StreamType[]>([]);

  useEffect(() => {
    fetch("/api/twitch/streams/followed")
      .then((res) => res.json())
      .then((res) => {
        setStreams(res);
      });
  }, []);

  if (streams.length === 0) {
    return <span className="text-zinc-400">Loading streams…</span>;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-8">
      {streams.map(
        ({ id, user_name, user_id, thumbnail_url, title, game_name }) => (
          <Stream
            key={id}
            user_name={user_name}
            user_id={user_id}
            thumbnail={thumbnail_url}
            title={title}
            game={game_name}
          />
        ),
      )}
    </div>
  );
}
