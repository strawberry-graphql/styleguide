export const Code = ({ children }: { children: React.ReactNode }) => {
  return (
    <code className="typography-code rounded-[4px] px-[6px] py-2 text-pink bg-g-50 dark:border dark:border-g-900 dark:bg-transparency-dark dark:text-orange">
      {children}
    </code>
  );
};
