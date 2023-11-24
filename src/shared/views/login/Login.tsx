import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import Button from '@/shared/components/button/Button';
import Input from '@/shared/components/input/Input';
import Page from '@/shared/components/page/Page';
import Footer from '../home/components/footer/Footer';

export default function Login() {
  return (
    <Page footer={<Footer />}>
      <div className="pt-8 px-32 flex items-center flex-col pb-24 text-center">
        <a href="/">
          <img src="/logo.png" alt="logo" className="h-9 mr-2 mb-8" />
        </a>
        <div className="bg-white rounded-2xl p-8 shadow border">
          <div className="mb-8">
            <h1 className="text-3xl">Sign in</h1>
            <p className="text-sm text-zinc-500">
              {`Dont't have an account? `}
              <a href="/register" className="hover:text-zinc-800 font-medium">
                Register now.
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center w-72">
            <Input className="mb-2" placeholder="Email" />
            <Input className="mb-2" placeholder="Password" />
            <Button text="Submit" className="w-full" />
            <span className="mb-4 mt-8 text-sm text-zinc-500">Or sign in with one of these providers:</span>

            <Button text="Google" className="mb-2 w-full" variant="secondary" icon={FcGoogle} />
            <Button text="GitHub" className="w-full" variant="secondary" icon={SiGithub} />
          </div>
        </div>
      </div>
    </Page>
  );
}
