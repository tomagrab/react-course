import Navbar from '@/components/Layout//Navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="px-8 py-4">
      <Navbar />
      {children}
    </div>
  );
}
