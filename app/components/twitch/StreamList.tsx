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

  return (
    <>
      {streams.length > 0 ? (
        streams.map(
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
        )
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}
