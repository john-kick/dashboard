import { SessionProvider } from "@node_modules/next-auth/react";
import QuickLinkSection from "./sections/QuickLinkSection";
import TwitchSection from "./sections/TwitchSection";

export default function Dashboard() {
  return (
    <SessionProvider>
      <div className="flex-col divide-y-4 divide-slate-700 divide-solid divide- w-3/4">
        {/* Quick links */}
        <QuickLinkSection />
        <TwitchSection />
      </div>
    </SessionProvider>
  );
}
