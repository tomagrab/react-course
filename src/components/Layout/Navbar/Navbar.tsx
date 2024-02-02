import Header from '@/components/Layout/Navbar/Header/Header';
import NavbarLinks from '@/components/Layout/Navbar/NavbarLinks/NavbarLinks';

const navbarLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav
      className={`flex items-center justify-between border-b-2 border-b-slate-400 pb-4`}
    >
      <Header title={`1Bloge`} />
      <NavbarLinks navbarLinks={navbarLinks} />
    </nav>
  );
}
