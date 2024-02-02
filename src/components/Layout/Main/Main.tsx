type MainProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Main({ children, className }: MainProps) {
  return (
    <main className={`pt-4 ${className ? className : null}`}>{children}</main>
  );
}
