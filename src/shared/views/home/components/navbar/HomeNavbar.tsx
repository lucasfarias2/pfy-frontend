import Button from '@/shared/components/button/Button';
import Navbar from '@/shared/components/navbar/Navbar';
import NavbarLink from '@/shared/components/navbar/NavbarLink';

export default function HomeNavbar() {
  return (
    <Navbar
      guestLinks={
        <>
          <NavbarLink to="/" text="Home" activeClassName="text-zinc-800" />
          <NavbarLink to="/toolkits" activeClassName="text-zinc-800" text="Toolkits" />
          <NavbarLink to="/cloud" activeClassName="text-zinc-800" text="Cloud" external />
          <NavbarLink to="/contact" activeClassName="text-zinc-800" text="Contact us" />
        </>
      }
      logoImgSrc="/logo.svg"
      logoImgAlt="Packlify Logo"
      logoLink="/"
      controlLinks={
        <>
          <a href="/register">
            <Button variant="primary" text="Create account" className="mr-2" />
          </a>
          <a href="/login">
            <Button variant="tertiary" text="Login" />
          </a>
        </>
      }
      navbarClassName="bg-white h-20"
    />
  );
}
