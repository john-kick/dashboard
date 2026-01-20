"use client";

import AddQuickLink from "../AddQuickLink";
import DashboardSection from "./DashboardSection";
import QuickLink from "../QuickLink";
import { QuickLink as QuickLinkType } from "@types/core";
import { useEffect, useState } from "react";

export default function QuickLinkSection(): React.JSX.Element {
  const [quicklinks, setQuicklinks] = useState<QuickLinkType[]>([]);
  useEffect(() => {
    fetch("http://localhost/api/quicklink")
      .then((res) => res.json())
      .then((res) => setQuicklinks(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <DashboardSection title="Quick links">
      {quicklinks.map(({ id, name, url, iconLink }) => (
        <QuickLink key={id} id={id} name={name} url={url} iconLink={iconLink} />
      ))}

      {/* Add quick link button */}
      <AddQuickLink />
    </DashboardSection>
  );
}
