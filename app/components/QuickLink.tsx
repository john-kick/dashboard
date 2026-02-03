import { MouseEventHandler } from "@node_modules/@types/react";
import Link from "@node_modules/next/link";
import Image from "next/image";

export const ICON_WIDTH = 40;

type CardProps = {
  id: number;
  name: string;
  url: string;
  iconLink?: string;
  editMode: boolean;
  onDelete: (id: number) => void;
};

function getIconURL(url: string): string {
  const domain = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${ICON_WIDTH}`;
}

export default function QuickLink({
  id,
  name,
  url,
  iconLink,
  editMode,
  onDelete,
}: CardProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    event.preventDefault(); // prevents link navigation
    onDelete(id);
  };

  return (
    <div className="relative inline-block">
      <Link href={url}>
        <div className="flex w-20 flex-col items-center p-1 transition hover:scale-105">
          <div className="mb-2 flex h-15 w-15 items-center justify-center rounded-xl bg-slate-700 shadow shadow-black">
            <Image
              alt="Logo"
              src={getIconURL(iconLink ?? url)}
              width={ICON_WIDTH}
              height={ICON_WIDTH}
            />
          </div>
          <h4 className="max-w-30 overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </h4>
        </div>
      </Link>

      {editMode && (
        <button
          onClick={handleClick}
          className="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-amber-700 shadow transition hover:scale-110"
        >
          <Image src="/trash.svg" width={16} height={16} alt="Delete" />
        </button>
      )}
    </div>
  );
}
