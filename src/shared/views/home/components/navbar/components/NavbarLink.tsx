import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export default function NavbarLink({ text, className, to, ...rest }: IProps) {
  return (
    <NavLink to={to} className={classNames('mx-3', className)} {...rest}>
      {text}
    </NavLink>
  );
}

interface IProps extends IComponent {
  to: string;
  text: string;
}
