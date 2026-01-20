import { auth } from "@auth";
import { FollowedStreamsResponse } from "@types/twitch";
import config from "@util/config";
import { makeAuthRequest } from "@util/twitch";

export async function GET(): Promise<Response> {
  const session = await auth();

  if (!session?.data?.access_token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const liveStreams = await makeAuthRequest<FollowedStreamsResponse>(
    `https://api.twitch.tv/helix/streams/followed?user_id=${session.data.providerAccountId}`,
    session.data.access_token,
  );

  return Response.json(liveStreams.data);
}
