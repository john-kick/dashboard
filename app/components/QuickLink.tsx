import Image from "next/image";

export const ICON_WIDTH = 40;

type CardProps = {
  name: string;
  url: string;
  iconLink?: string;
};

function getIconURL(url: string): string {
  const domain = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${ICON_WIDTH}`;
}

export default function QuickLink({ name, url, iconLink }: CardProps) {
  return (
    <a href={url}>
      <div className="p-1 flex flex-col justify-center items-center w-20">
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
    </a>
  );
}
