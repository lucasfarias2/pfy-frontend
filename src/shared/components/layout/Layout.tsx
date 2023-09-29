import classnames from 'classnames';
import { useContext } from 'react';
import { DarkModeContext } from '@/shared/contexts/DarkModeContext';
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
        <div>
          Copyright &copy; {new Date().getFullYear()} Lucas Farias. All rights reserved. <p>lucasfarias.com</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
