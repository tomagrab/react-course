import NavbarHeader from '@/components/Layout/Navbar/NavbarHeader/NavbarHeader';
import NavbarLinks from '@/components/Layout/Navbar/NavbarLinks/NavbarLinks';

const navbarLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'New Blog', href: '/new' },
];

export default function Navbar() {
  return (
    <nav
      className={`flex items-center justify-between border-b-2 border-b-slate-700 pb-4`}
    >
      <NavbarHeader title={`1Bloge`} />
      <NavbarLinks navbarLinks={navbarLinks} />
    </nav>
  );
}
