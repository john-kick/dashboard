import quickLinks from "@data/quicklinks.json";
import AddQuickLink from "../AddQuickLink";
import DashboardSection from "./DashboardSection";
import QuickLink from "../QuickLink";

export default function QuickLinkSection(): React.JSX.Element {
  return (
    <DashboardSection title="Quick links">
      {quickLinks.map(({ name, url, iconLink }, index) => (
        <QuickLink key={index} name={name} url={url} iconLink={iconLink} />
      ))}

      {/* Add quick link button */}
      <AddQuickLink />
    </DashboardSection>
  );
}
