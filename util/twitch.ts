import { TwitchAPIErrorResponse } from "@types/twitch";
import APIError from "./APIError";
import config from "./config";

export async function makeAuthRequest<T>(
  url: string,
  access_token: string,
): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Client-Id": config.AUTH_TWITCH_ID,
    },
  });

  if (!response.ok) {
    let code = 500;
    let message = "An unknown error occurred.";

    try {
      const errResult = (await response.json()) as TwitchAPIErrorResponse;
      code = errResult.status;
      message = errResult.message;
    } catch (err) {
      if (err instanceof Error) {
        message = `Error while processing API Error: ${err.message}`;
      }
    }
    throw new APIError(code, message);
  }

  const result = await response.json();
  return result as T;
}
