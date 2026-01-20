import { auth } from "@auth";
import { UserDataResponse } from "@types/twitch";
import { makeAuthRequest } from "@util/twitch";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const session = await auth();

  if (!session?.data?.access_token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const userID = request.nextUrl.searchParams.get("user_id");
  if (!userID) {
    return new Response("Missing user_id parameter", { status: 400 });
  }

  const userDataResponse = await makeAuthRequest<UserDataResponse>(
    `https://api.twitch.tv/helix/users?id=${userID}`,
    session.data.access_token,
  );

  if (userDataResponse.data.length === 0) {
    return new Response(`User with ID ${userID} not found`, { status: 404 });
  }

  return Response.json(userDataResponse.data[0].profile_image_url);
}
