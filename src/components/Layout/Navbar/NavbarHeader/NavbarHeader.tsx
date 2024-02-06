type HeaderProps = {
  title: string;
};

export default function NavbarHeader({ title }: HeaderProps) {
  return (
    <header>
      <h1 className="text-2xl font-bold text-pink-400 ">{title}</h1>
    </header>
  );
}
