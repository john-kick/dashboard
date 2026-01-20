import { QuickLinkConfig } from "@types/core";
import { read, write } from "@util/fs";
import { NextRequest } from "next/server";
import { QUICKLINKS_PATH } from "../route";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const content = await read(QUICKLINKS_PATH);
  const config = JSON.parse(content) as QuickLinkConfig;

  const reducedConfigData = config.data.filter((ql) => ql.id !== +id);

  if (config.data <= reducedConfigData) {
    return new Response(`Quicklink with id ${id} not found.`, { status: 404 });
  }

  config.data = reducedConfigData;
  await write(QUICKLINKS_PATH, JSON.stringify(config, null, 4));

  return Response.json(null, { status: 200 });
}
