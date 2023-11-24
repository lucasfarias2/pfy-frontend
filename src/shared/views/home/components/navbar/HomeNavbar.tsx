import Button from '@/shared/components/button/Button';
import NavbarLink from '@/shared/components/navbar/NavbarLink';

export default function HomeNavbar() {
  return (
    <div className="flex h-20 bg-white py-4 px-32 justify-between relative">
      <div className="flex items-center flex-wrap">
        <a href="/">
          <img src="/logo.svg" alt="logo" className="h-9 mr-12" />
        </a>
        <div>
          <NavbarLink to="/" text="Home" activeClassName="text-zinc-800" />
          <NavbarLink to="/toolkits" activeClassName="text-zinc-800" text="Toolkits" />
          <NavbarLink to="/cloud" activeClassName="text-zinc-800" text="Cloud" external />
          <NavbarLink to="/contact" activeClassName="text-zinc-800" text="Contact us" />
        </div>
      </div>
      <div className="flex items-center">
        <a href="/register">
          <Button variant="primary" text="Create account" className="mr-2" />
        </a>
        <a href="/login">
          <Button variant="tertiary" text="Login" />
        </a>
      </div>
    </div>
  );
}
