import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import Button from '@/shared/components/button/Button';
import Container from '@/shared/components/container/Container';
import Page from '@/shared/components/page/Page';
import Footer from '../home/components/footer/Footer';
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <Page footer={<Footer />}>
      <div className="pt-8 px-32 flex items-center flex-col pb-24 text-center">
        <a href="/">
          <img src="/logo.png" alt="logo" className="h-9 mr-2 mb-8" />
        </a>
        <Container className="">
          <div className="mb-8">
            <h1 className="text-3xl">Create new account</h1>
            <p className="text-sm text-zinc-500">
              Already have an account?{' '}
              <a href="/login" className="hover:text-zinc-800 font-medium">
                Login.
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center w-72">
            <RegisterForm />
            <span className="my-4 text-sm text-zinc-500">Or register with one of these providers:</span>

            <Button text="Google" className="mb-2 w-full" variant="tertiary" icon={FcGoogle} />
            <Button text="GitHub" className="w-full" variant="tertiary" icon={SiGithub} />
          </div>
        </Container>
      </div>
    </Page>
  );
}
