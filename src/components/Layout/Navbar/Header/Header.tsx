type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header>
      <h1 className="text-2xl">{title}</h1>
    </header>
  );
}
