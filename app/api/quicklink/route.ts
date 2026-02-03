import { QuickLinkConfig } from "@types/core";
import { read, write } from "@util/fs";
import { NextRequest } from "next/server";
import path from "path";

export const QUICKLINKS_PATH = path.join(
  process.cwd(),
  "data",
  "quicklinks.json",
);

export async function GET(request: NextRequest) {
  const content = await read(QUICKLINKS_PATH);
  const config = JSON.parse(content) as QuickLinkConfig;
  return Response.json(config.data);
}

/**
 * Creates a new quicklink and responds with the new quicklink data as the body
 */
export async function POST(request: NextRequest) {
  if (!request.body) {
    return new Response("No body found", { status: 400 });
  }

  const { name, url } = await request.json();

  const content = await read(QUICKLINKS_PATH);
  const config = JSON.parse(content) as QuickLinkConfig;
  const newQuickLink = { id: config.auto_increment++, name, url };
  config.data.push(newQuickLink);

  write(QUICKLINKS_PATH, JSON.stringify(config, null, 4));

  return Response.json(newQuickLink, { status: 200 });
}
