import classNames from 'classnames';

interface SolutionProps {
  title: string;
  titleClassName?: string;
}

function Solution({ title, titleClassName }: SolutionProps) {
  return (
    <div className={classNames('rounded-lg p-4 mr-4 mb-2 w-[200px] bg-white border')} style={{ maxWidth: '300px' }}>
      <div className={classNames('font-medium text-xl brand leading-none', titleClassName)}>{title}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="pb-8 bg-white">
      <div className="h-[90px] flex items-center justify-between md:px-16 px-8">
        <div className="flex items-center">
          <img src="/logo.png" alt="Packlify" className="h-[36px]" />
          <div className="ml-16">
            <a href="/" className="hover:opacity-100 opacity-70 p-3">
              Solutions
            </a>
            <a href="/" className="hover:opacity-100 opacity-70 p-3">
              Documentation
            </a>
            <a href="/" className="hover:opacity-100 opacity-70 p-3">
              Pricing
            </a>
            <a href="/" className="hover:opacity-100 opacity-70 p-3">
              Contact us
            </a>
          </div>
        </div>
        <div>
          <a href="/register">
            <button type="button" className="bg-zinc-900 font-medium px-3 py-2 text-white rounded-lg shadow-sm text-sm">
              Create account
            </button>
          </a>
          <a href="/login">
            <button type="button" className="ml-4 rounded-lg border px-3 py-2 shadow-sm font-medium text-sm">
              Login
            </button>
          </a>
        </div>
      </div>
      <div className="py-12 flex flex-col md:px-16 px-8 shadow-md relative">
        <h1 className="text-5xl font-medium md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-30% via-rose-500 to-orange-400">
          Welcome to <strong>the</strong> <strong>platform</strong> for <strong>startups</strong>
        </h1>
        <p className="text-lg md:text-xl max-w-[600px] mt-4 leading-7">
          A set of powerful <strong>cloud services and tools</strong> to make you <strong>succeed.</strong> With{' '}
          <strong>speed and performance</strong> as the paramount <strong>priority</strong>.
        </p>
        <div className="mt-12">
          <a href="/">
            <button type="button" className="bg-zinc-900 font-medium py-3 text-white px-6 rounded-lg shadow-sm text-sm">
              Get started
            </button>
          </a>
          <button type="button" className="ml-4 rounded-lg border px-6 py-3 shadow-sm font-medium text-sm">
            Learn more
          </button>
        </div>
      </div>
      <div className="py-8 md:px-16 px-8 bg-neutral-100">
        <h1 className="text-2xl font-medium">Solutions</h1>
        <div className="mt-4">
          <Solution title="Cloud" titleClassName="text-rose-500" />
          <Solution title="Toolkits" titleClassName="text-blue-500" />
          <Solution title="Growth" titleClassName="text-green-500" />
          <Solution title="Data" titleClassName="text-purple-500" />
          <Solution title="Forge" titleClassName="text-pink-500" />
          <Solution title="Accounts" titleClassName="text-cyan-500" />
          <Solution title="Performance" titleClassName="text-teal-600" />
          <Solution title="AI" titleClassName="text-orange-500" />
          <Solution title="Gaming" titleClassName="text-emerald-600" />
        </div>
      </div>
    </div>
  );
}
