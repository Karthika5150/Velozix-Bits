import SideNav from "@/components/layout/sidenav";
import DocsBackground from "@/components/docs/DocsBackground";

export default function DocsLayout({ children }) {
  return (
    <div className="flex flex-1 min-h-[calc(100vh-3.5rem)]">
      <SideNav />
      <div className="flex flex-1 min-h-[calc(100vh-3.5rem)] ml-[18%] justify-between">
        <DocsBackground />
        <div className="flex-1 min-w-0 max-w-5xl px-2 sm:px-4 md:px-6 py-6">
          {children}
        </div>
        <DocsBackground />
      </div>
    </div>
  );
}
