import Image from "next/image";

const CARD_WIDTH = 40;

type CardProps = {
  title: string;
  url: string;
};

function getIconURL(url: string): string {
  const domain = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${CARD_WIDTH}`;
}

export default function Card({ title, url }: CardProps) {
  return (
    <a href={url}>
      <div className="p-1 flex flex-col justify-center items-center">
        <div className="bg-slate-700 shadow shadow-black w-15 h-15 rounded-xl flex items-center justify-center mb-2">
          <Image
            alt="Logo"
            src={getIconURL(url)}
            width={CARD_WIDTH}
            height={CARD_WIDTH}
            className="flex-none"
          />
        </div>
        <h4>{title}</h4>
      </div>
    </a>
  );
}
