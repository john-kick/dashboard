"use client";

import AddQuickLink from "../AddQuickLink";
import DashboardSection from "./DashboardSection";
import QuickLink from "../QuickLink";
import { QuickLink as QuickLinkType } from "@types/core";
import { useEffect, useState } from "react";

export default function QuickLinkSection(): React.JSX.Element {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [quicklinks, setQuicklinks] = useState<QuickLinkType[]>([]);
  useEffect(() => {
    fetch("http://localhost/api/quicklink")
      .then((res) => res.json())
      .then((res) => setQuicklinks(res))
      .catch((err) => console.error(err));
  }, []);

  const handleCreate = (link: QuickLinkType) => {
    setQuicklinks((prev) => [...prev, link]);
  };

  const handleDelete = async (id: number) => {
    const prev = quicklinks;
    setQuicklinks((q) => q.filter((l) => l.id !== id));

    try {
      await fetch(`/api/quicklink/${id}`, { method: "DELETE" });
    } catch {
      // rollback
      setQuicklinks(prev);
    }
  };

  return (
    <DashboardSection title="Quick links">
      {editMode ? (
        <button onClick={() => setEditMode(false)}>Save</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
      )}
      <div className="flex justify-center gap-5">
        {quicklinks.map(({ id, name, url, iconLink }) => (
          <QuickLink
            key={id}
            id={id}
            name={name}
            url={url}
            iconLink={iconLink}
            editMode={editMode}
            onDelete={handleDelete}
          />
        ))}

        {/* Add quick link button */}
        <AddQuickLink onCreateAction={handleCreate} />
      </div>
    </DashboardSection>
  );
}
