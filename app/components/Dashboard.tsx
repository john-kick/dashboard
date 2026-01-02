import AddQuickLink from "./AddQuickLink";
import QuickLink from "./QuickLink";
import quickLinks from "@data/quicklinks.json";
import DashboardSection from "./DashboardSection";

export default function Dashboard() {
  return (
    <div className="flex-col divide-y-4 divide-slate-700 divide-solid divide- w-3/4">
      {/* Quick links */}
      <DashboardSection title="Quick links">
        {quickLinks.map(({ name, url, iconLink }, index) => (
          <QuickLink key={index} name={name} url={url} iconLink={iconLink} />
        ))}

        {/* Add quick link button */}
        <AddQuickLink />
      </DashboardSection>
    </div>
  );
}
