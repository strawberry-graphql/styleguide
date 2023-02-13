export const Display = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-bold font-display text-display-s md:text-display">
      {children}
    </h1>
  );
};
