import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormInput from '@/components/form/FormInput';
import firebaseClient from '@/config/firebase';
import Button from '@/shared/components/button/Button';

export default function LoginForm() {
  const auth = getAuth(firebaseClient);

  const {
    setError,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = async data => {
    const { password, email } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if (userCredential) {
        console.log('userCredential', userCredential);
        // window.location.href = '/dashboard';
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      // toast
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-1 flex-col">
      <FormInput
        name="email"
        required
        control={control}
        errors={errors}
        inputProps={{ type: 'email', placeholder: 'Email', autoComplete: 'email' }}
      />

      <FormInput
        name="password"
        required
        control={control}
        errors={errors}
        inputProps={{ type: 'password', placeholder: 'Password', autoComplete: 'new-password' }}
      />

      <Button text="Submit" className="w-full" />
    </form>
  );
}

interface IFormData {
  email: string;
  password: string;
}
