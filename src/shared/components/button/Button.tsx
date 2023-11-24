import classNames from 'classnames';

export default function Button({ text, className, variant = 'primary', ...rest }: IProps) {
  let mainClassName = 'bg-zinc-800 text-white';

  if (variant === 'secondary') {
    mainClassName = 'bg-gray-100 text-zinc-800';
  }

  return (
    <button
      className={classNames(mainClassName, 'py-3 px-5 rounded-3xl text-sm font-semibold hover:opacity-80', className)}
      {...rest}
    >
      {text}
    </button>
  );
}

interface IProps extends IComponent {
  variant: 'primary' | 'secondary';
  text: string;
}
