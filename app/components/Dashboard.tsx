import Card from "./Card";

export default function Dashboard() {
  return (
    <div className="flex justify-center">
      <div className="flex gap-12 max-w-4xl m-3 p-3 w-3/4 ">
        <Card title="Tidal" url="https://tidal.com" />
        <Card title="Youtube" url="https://youtube.com" />
        <Card title="Twitch" url="https://twitch.tv" />
      </div>
    </div>
  );
}
