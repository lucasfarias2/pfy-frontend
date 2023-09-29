import classnames from 'classnames';
import type { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { MdOutlineScience } from 'react-icons/md';
import { SiCodereview, SiPostgresql } from 'react-icons/si';
import { SlTrophy } from 'react-icons/sl';

const Home = ({ device }: { device: IDevice }) => {
  return (
    <div className="py-8 px-16">
      <h1 className="text-4xl">Start a project now</h1>
      <p className="text-lg text-gray-500">Kickstart a new project by choosing an application starter.</p>
      <hr className="my-8 border-gray-300" />
      <h2 className="text-2xl mb-4">Web applications</h2>
      <div className="flex">
        <HomeItem
          bgColorClass="bg-sky-800"
          title="packlify-web"
          description="Start a new React application"
          Icon={FaReact}
        />
      </div>
      <hr className="my-8 border-gray-300" />
      <h2 className="text-2xl mb-4">Databases</h2>
      <div className="flex">
        <HomeItem
          bgColorClass="bg-blue-400"
          title="PostgreSQL"
          description="Create a new PostgreSQL server"
          Icon={SiPostgresql}
        />
      </div>
      <hr className="my-8 border-gray-300" />
      <h2 className="text-2xl mb-4">Integrations</h2>
      <div className="flex">
        <HomeItem
          bgColorClass="bg-blue-900"
          title="Packlify Loyalty"
          description="Integrate your apps with Packlify Loyalty tools."
          Icon={SlTrophy}
        />
        <HomeItem
          bgColorClass="bg-violet-600"
          title="Packlify Data"
          description="Integrate your apps with Packlify Data tools."
          Icon={MdOutlineScience}
        />
        <HomeItem
          bgColorClass="bg-amber-600"
          title="Packlify AI"
          description="Integrate your apps with Packlify AI tools."
          Icon={SiCodereview}
        />
      </div>
    </div>
  );
};

const HomeItem = ({
  title,
  description,
  Icon,
  bgColorClass,
}: {
  title: string;
  description: string;
  Icon: IconType;
  bgColorClass: string;
}) => {
  return (
    <div className="bg-white w-48 mr-4 rounded-md shadow-md hover:shadow-lg overflow-hidden flex flex-col hover:scale-105 transition duration-200 ease-in-out">
      <div className={classnames('flex items-center justify-center', bgColorClass)}>
        {<Icon className="text-[60px] text-white my-4" />}
      </div>
      <div className="p-4 relative h-full flex flex-col justify-between">
        <div className="mb-8">
          <div className="font-semibold">{title}</div>
          <p className="">{description}</p>
        </div>
        <button
          type="button"
          className="text-rose-700 font-semibold p-2 rounded-md px-4 text-sm hover:bg-rose-700 hover:text-white"
        >
          Start setup
        </button>
      </div>
    </div>
  );
};

export default Home;
