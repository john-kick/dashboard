import { readFile, writeFile } from "node:fs/promises";

export async function read(path: string): Promise<string> {
  return await readFile(path, "utf-8");
}

/**
 * Writes the given data into the given file.
 * Overwrites existing content!
 */
export async function write(path: string, data: string): Promise<void> {
  await writeFile(path, data, "utf8");
}
