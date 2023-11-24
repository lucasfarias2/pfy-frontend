import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export default function NavbarLink({ text, className, activeClassName, external = false, to, ...rest }: IProps) {
  if (external) {
    return (
      <a href={to} className={classNames('mx-3', 'text-zinc-400')} {...rest}>
        {text}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames('mx-3', isActive ? activeClassName : 'text-zinc-400', className)}
      {...rest}
    >
      {text}
    </NavLink>
  );
}

interface IProps extends IComponent {
  activeClassName?: string;
  to: string;
  text: string;
  external?: boolean;
}
