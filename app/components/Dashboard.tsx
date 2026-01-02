import AddQuickLink from "./AddQuickLink";
import QuickLink from "./QuickLink";
import quickLinks from "@data/quicklinks.json";

export default function Dashboard() {
  return (
    <div className="flex justify-center">
      <div className="flex gap-12 max-w-4xl m-3 p-3 w-3/4 ">
        {/* Quick links */}
        {quickLinks.map(({ name, url, iconLink }, index) => (
          <QuickLink key={index} name={name} url={url} iconLink={iconLink} />
        ))}

        {/* Add quick link button */}
        <AddQuickLink />
      </div>
    </div>
  );
}
