import { LuUserCircle2 } from 'react-icons/lu';
import Button from '@/shared/components/button/Button';
import Navbar from '@/shared/components/navbar/Navbar';
import NavbarLink from '@/shared/components/navbar/NavbarLink';

export default function CloudNavbar() {
  return (
    <Navbar
      guestLinks={
        <>
          <NavbarLink to="/cloud" text="Organization" activeClassName="text-rose-500" />
          <NavbarLink to="/cloud/projects" text="Projects" activeClassName="text-rose-500" />
          <NavbarLink to="/cloud/users" text="Users" activeClassName="text-rose-500" />
          <NavbarLink to="/cloud/settings" text="Settings" activeClassName="text-rose-500" />
        </>
      }
      logoImgSrc="/logo-cloud.svg"
      logoImgAlt="Packlify Logo"
      logoLink="/cloud"
      controlLinks={
        <>
          <a href="/login">
            <Button variant="dark" text="Lucas" icon={LuUserCircle2} />
          </a>
        </>
      }
      showSubNavbar
      navbarClassName="bg-zinc-800 text-white h-16 shadow border-b"
    />
  );
}
