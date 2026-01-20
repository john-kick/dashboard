import { MouseEventHandler } from "@node_modules/@types/react";
import Link from "@node_modules/next/link";
import Image from "next/image";

export const ICON_WIDTH = 40;

type CardProps = {
  id: number;
  name: string;
  url: string;
  iconLink?: string;
};

function getIconURL(url: string): string {
  const domain = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${ICON_WIDTH}`;
}

export default function QuickLink({ id, name, url, iconLink }: CardProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    fetch(`/api/quicklink/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="relative inline-block">
      <Link href={url}>
        <div className="p-1 flex flex-col justify-center items-center w-20 transform transition hover:scale-105">
          <div className="bg-slate-700 shadow shadow-black w-15 h-15 rounded-xl flex items-center justify-center mb-2">
            <Image
              alt="Logo"
              src={getIconURL(iconLink ?? url)}
              width={ICON_WIDTH}
              height={ICON_WIDTH}
              className="flex-none"
            />
          </div>
          <h4 className="text-ellipsis overflow-hidden max-w-30">{name}</h4>
        </div>
      </Link>
      <button
        onClick={handleClick}
        className="flex justify-center rounded-full bg-amber-700 w-6 h-6 cursor-pointer transform transition hover:scale-120 absolute top-0 right-0 shadow"
      >
        <Image src="trash.svg" width={20} height={20} alt="Trash" />
      </button>
    </div>
  );
}
