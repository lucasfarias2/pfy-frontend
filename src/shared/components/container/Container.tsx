import classNames from 'classnames';

export default function Container({ children, className }: IComponent) {
  return <div className={classNames('bg-white rounded-2xl p-8 shadow border', className)}>{children}</div>;
}
