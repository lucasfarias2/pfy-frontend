import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-white border-b h-[74px] flex items-center shadow justify-between px-16 brand">
      <div className="flex items-center">
        <a href="/" className="logo flex items-center text-rose-700 mr-16">
          <Logo className="text-xl mr-2 fill-rose-700" />
          Packlify Cloud Software
        </a>
        <div className="mr-8 text-lg">Projects</div>
        <div className="mr-8 text-lg">Users</div>
      </div>

      <div className="flex items-center">
        <div className="mr-8 text-lg">Help</div>
        <div className="p-2 px-4 text-lg text-rose-700">Login</div>
      </div>
    </nav>
  );
};

export default Navbar;
