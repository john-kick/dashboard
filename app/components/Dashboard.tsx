import Card from "./Card";
import quickLinks from "../../quick-access.json";

export default function Dashboard() {
  return (
    <div className="flex justify-center">
      <div className="flex gap-12 max-w-4xl m-3 p-3 w-3/4 ">
        {quickLinks.map(({ name, url, iconLink }, index) => (
          <Card key={index} name={name} url={url} iconLink={iconLink} />
        ))}
      </div>
    </div>
  );
}
