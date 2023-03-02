export const DocsWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-[1600px] 2xl:mx-auto 2xl:relative 2xl:-left-[160px] 2lx:bg-pink md:grid grid-cols-[minmax(0,1fr)_200px]">
    {children}
  </div>
);

export const DocsContent = ({ children }: { children: React.ReactNode }) => (
  <div className="docs-content">{children}</div>
);
