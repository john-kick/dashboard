"use client";

import { useSession } from "next-auth/react";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";
import UserAvatar from "../twitch/UserAvatar";
import DashboardSection from "./DashboardSection";
import StreamList from "../twitch/StreamList";

export default function TwitchSection(): React.JSX.Element {
  const { data: session } = useSession();

  return (
    <DashboardSection title={"Twitch"}>
      {session ? (
        <>
          {/*<UserAvatar />*/}
          <StreamList />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </DashboardSection>
  );
}
