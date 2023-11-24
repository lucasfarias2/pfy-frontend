import classNames from 'classnames';
import React from 'react';

export default function Button({
  text,
  className,
  size = 'md',
  variant = 'primary',
  icon: Icon,
  iconClassName,
  ...rest
}: IProps) {
  let mainClassName = 'bg-zinc-800 text-white hover:opacity-75 shadow border-2 border-white';
  let sizeClassName = 'h-10 px-6';
  let defaultIconClassName = 'text-xl';

  if (variant === 'secondary') {
    mainClassName = 'bg-gray-100 text-zinc-800 hover:opacity-60';
  }

  if (variant === 'tertiary') {
    mainClassName = 'bg-white text-zinc-800 hover:bg-zinc-100 border-2 border-white shadow';
  }

  if (variant === 'dark') {
    mainClassName = 'text-zinc-200 bg-zinc-900 hover:opacity-75 border-zinc-800/80 border-2 shadow';
  }

  if (size === 'sm') {
    sizeClassName = 'h-8 text-xs px-4';
    defaultIconClassName = 'text-lg';
  }

  return (
    <button
      className={classNames(
        mainClassName,
        'flex items-center justify-center rounded-2xl text-sm font-semibold',
        sizeClassName,
        className
      )}
      {...rest}
    >
      {Icon && <Icon className={classNames(defaultIconClassName, 'mr-2', iconClassName)} />}
      {text}
    </button>
  );
}

interface IProps extends IComponent {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'dark';
  size?: 'sm' | 'md';
  icon?: React.ComponentType<IComponent>;
  iconClassName?: string;
  text: string;
}
