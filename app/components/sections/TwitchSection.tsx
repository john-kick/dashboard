"use client";

import { useSession } from "next-auth/react";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";
import DashboardSection from "./DashboardSection";
import StreamList from "../twitch/StreamList";
import User from "../twitch/User";

export default function TwitchSection(): React.JSX.Element {
  const { data: session } = useSession();

  return (
    <DashboardSection title={"Twitch"}>
      {session ? (
        <div className="flex flex-col w-full">
          <User />
          <StreamList />
          <SignOut />
        </div>
      ) : (
        <SignIn />
      )}
    </DashboardSection>
  );
}
