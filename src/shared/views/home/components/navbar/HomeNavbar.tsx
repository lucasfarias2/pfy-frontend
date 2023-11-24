import Button from '@/shared/components/button/Button';
import NavbarLink from './components/NavbarLink';

export default function HomeNavbar() {
  return (
    <div className="flex h-20 bg-white py-4 px-32 justify-between relative">
      <div className="flex items-center">
        <a href="/">
          <img src="/logo.png" alt="logo" className="h-9 mr-12" />
        </a>
        <div>
          <NavbarLink to="/" text="Home" />
          <NavbarLink to="/toolkits" text="Toolkits" />
        </div>
      </div>
      <div className="flex items-center">
        <Button variant="primary" text="Create account" className="mr-2" />
        <Button variant="tertiary" text="Login" />
      </div>
    </div>
  );
}
