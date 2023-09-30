import classnames from 'classnames';
import { useContext } from 'react';
import { DarkModeContext } from '@/shared/contexts/DarkModeContext';
import PacklifyLogo from '../packlify-logo/PacklifyLogo';
import Navbar from './navbar/Navbar';

const Layout = ({ children }: IComponent) => {
  const darkMode = useContext(DarkModeContext);

  return (
    <>
      <Navbar />
      <main className={classnames({ dark: darkMode })}>{children}</main>
      <footer
        className={classnames('h-100 border-t bg-white p-6 text-center text-xs text-gray-400 shadow-sm', {
          dark: darkMode,
        })}
      >
        <div className="flex items-center text-2xl brand justify-center mb-2 text-black/70">
          <PacklifyLogo className="text-2xl" />
          Packlify
        </div>

        <div>
          Copyright &copy; {new Date().getFullYear()} Lucas Farias. All rights reserved. <p>lucasfarias.com</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
