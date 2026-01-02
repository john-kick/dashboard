import QuickLinkSection from "./sections/QuickLinkSection";

export default function Dashboard() {
  return (
    <div className="flex-col divide-y-4 divide-slate-700 divide-solid divide- w-3/4">
      {/* Quick links */}
      <QuickLinkSection />
    </div>
  );
}
