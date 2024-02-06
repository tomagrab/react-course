import { NavbarLink } from '@/lib/Types/NavbarLink/NavbarLink';
import { Link } from 'react-router-dom';

type NavbarLinksProps = {
  navbarLinks: NavbarLink[];
};

export default function NavbarLinks({ navbarLinks }: NavbarLinksProps) {
  return (
    <div>
      {navbarLinks.map(navbarLink => (
        <Link key={navbarLink.href} to={navbarLink.href} className="text-xl">
          {navbarLink.title}
          {navbarLink !== navbarLinks[navbarLinks.length - 1] && ' | '}
        </Link>
      ))}
    </div>
  );
}
