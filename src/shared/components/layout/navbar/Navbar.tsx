import classnames from 'classnames';
import { VscAccount } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-neutral-800 h-[74px] flex items-center shadow-md justify-between px-16 relative z-50 text-white">
      <div className="flex items-center">
        <a href="/" className="logo flex items-center text-neutral-100 mr-16">
          <Logo className="text-[40px] mr-2 fill-white" />
          Packlify Cloud
        </a>
        <NavbarNavLink to="/">Home</NavbarNavLink>
        <NavbarNavLink to="/create">Create</NavbarNavLink>
        <NavbarNavLink to="/projects">Projects</NavbarNavLink>
        <NavbarNavLink to="/users">Users</NavbarNavLink>
      </div>

      <div className="flex items-center">
        <div className="mr-8 text">Help</div>
        <div className="text-white bg-black/30 p-2 px-4 rounded-xl flex items-center font-medium">
          <VscAccount className="mr-2 text" /> Login
        </div>
      </div>
    </nav>
  );
};

const NavbarNavLink = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classnames('p-2 mr-2 px-4 font-semibold hover:bg-white/10 rounded-xl hover:underline-offset-4', {
          'text-cyan-500 bg-cyan-600/10': isActive,
        })
      }
    >
      {children}
    </NavLink>
  );
};

export default Navbar;
