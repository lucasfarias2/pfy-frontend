import classNames from 'classnames';

export default function Input({ className, disabled = false, ...rest }: IProps) {
  return (
    <input
      className={classNames('py-3 px-4 rounded-2xl bg-zinc-50 border w-full text-sm', disabled ? '' : '', className)}
      disabled={disabled}
      {...rest}
    />
  );
}

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
}
