import { SearchInput } from "../form/search-input";
import { Section, SidebarNav } from "../sidebar-nav/sidebar-nav";
import { Spacer } from "../spacer/spacer";

export const DocsContent = ({ children }: { children: React.ReactNode }) => (
  <div className="docs-content">{children}</div>
);

export const DocsWrapper = ({
  sections,
  children,
}: {
  sections: Section[];
  children: React.ReactNode;
}) => {
  return (
    <div className="md:grid grid-cols-[320px_1fr]">
      <div className="w-[320px] hidden md:block pl-40 pr-16 sticky top-24 max-h-screen overflow-scroll">
        <Spacer size={16} />
        <SearchInput placeholder="Search" />
        <Spacer size={40} />
        <SidebarNav sections={sections} />
      </div>

      <div className="max-w-[1600px] 2xl:mx-auto 2xl:relative 2xl:-left-[160px] 2lx:bg-pink md:grid grid-cols-[minmax(0,1fr)_200px]">
        {children}
      </div>
    </div>
  );
};
