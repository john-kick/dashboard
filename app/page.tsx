import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-700/50">
        <Dashboard />
      </main>
    </div>
  );
}
