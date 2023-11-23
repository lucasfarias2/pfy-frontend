import classnames from 'classnames';
import { useContext } from 'react';
import { DarkModeContext } from '@/shared/contexts/DarkModeContext';

export default function Layout({ children }: IComponent) {
  const darkMode = useContext(DarkModeContext);

  return (
    <>
      <main className={classnames({ dark: darkMode })}>{children}</main>
    </>
  );
}

// interface ILayoutProps extends IComponent {}
