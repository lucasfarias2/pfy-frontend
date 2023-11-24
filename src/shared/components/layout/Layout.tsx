import classnames from 'classnames';
import { useContext } from 'react';
import { DarkModeContext } from '@/shared/contexts/DarkModeContext';

export default function Layout({ children, navbar, footer }: ILayoutProps) {
  const darkMode = useContext(DarkModeContext);

  return (
    <>
      {navbar && <nav>{navbar}</nav>}
      <main className={classnames({ dark: darkMode })}>{children}</main>
      {footer && <footer>{footer}</footer>}
    </>
  );
}

interface ILayoutProps extends IComponent {
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
}
