import { NavbarLink } from '@/lib/Types/NavbarLink/NavbarLink';

type NavbarLinksProps = {
  navbarLinks: NavbarLink[];
};

export default function NavbarLinks({ navbarLinks }: NavbarLinksProps) {
  return (
    <div>
      {navbarLinks.map(navbarLink => (
        <a key={navbarLink.href} href={navbarLink.href} className="text-xl">
          {navbarLink.title}
          {navbarLink !== navbarLinks[navbarLinks.length - 1] && ' | '}
        </a>
      ))}
    </div>
  );
}
