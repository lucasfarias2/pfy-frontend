const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="py-6 px-16 bg-cyan-700 shadow-lg relative">
      <h1 className="text-3xl text-white">{title}</h1>
      <p className="text-white/80">{subtitle}</p>
    </div>
  );
};

export default Header;
