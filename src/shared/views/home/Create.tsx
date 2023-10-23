import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { FaCheck, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { RxCross2 } from 'react-icons/rx';
import { SiAmazonaws } from 'react-icons/si';
import Header from '@/shared/components/header/Header';

const Create = ({ device }: { device: IDevice }) => {
  const [projectName, setProjectName] = useState('');
  const [projectId, setProjectId] = useState();
  const [projectStatus, setProjectStatus] = useState<MessageEvent>();

  const handleCreateProject = async () => {
    const { data } = await axios.post('http://localhost:8080/project', {
      name: projectName,
      organization_id: 1,
      toolkit_id: 1,
    });

    setProjectName('');

    if (data.id) {
      setProjectId(data.id);
    }
  };

  useEffect(() => {
    if (projectId) {
      const sse = new EventSource(`http://localhost:8080/project/${projectId}/status`);

      sse.onopen = event => {
        console.log('SSE connection opened:', event);
      };

      sse.onmessage = event => {
        setProjectStatus(JSON.parse(event.data));
      };

      sse.onerror = event => {
        console.error('SSE error:', event);
        sse.close();
      };

      return () => {
        sse.close();
      };
    }
  }, [projectId]);

  console.log('pro', projectStatus);

  return (
    <div>
      <Header title="Create a new project" subtitle="Fill our the information to get started with a new project" />
      <div className="px-16 py-8">
        {projectStatus && (
          <div className="mb-16">
            <h2 className="text-2xl">Project status</h2>
            <hr className="mb-8 mt-2 border-gray-300" />
            <ul>
              {projectStatus?.map(project => (
                <li key={project.ID} className="flex items-center mb-2 bg-white border rounded-lg shadow p-2">
                  <div>
                    <p className="text-xs">Task id: {project.TaskTypeID}</p>
                    {project.Status === 'Success' ? (
                      <div className="flex items-center mt-1">
                        <FaCheck className="text-green-500 mr-2" />{' '}
                        <p className="text-sm text-green-600 font-semibold mr-2">Completed </p>
                      </div>
                    ) : project.Status === 'Failed' ? (
                      <div className="flex items-center mt-1">
                        <RxCross2 className="text-red-500 mr-2 text-xl" />{' '}
                        <p className="text-sm text-red-600 font-semibold mr-2">Failed </p>
                      </div>
                    ) : (
                      <div className="flex items-center mt-1">
                        <AiOutlineLoading className="text-red-500 mr-2 animate-spin" />{' '}
                        <p className="text-sm font-semibold mr-2">Running </p>
                      </div>
                    )}
                    {project.Message && <p className="text-xs mt-2">{project.Message}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <h2 className="text-2xl">Project details</h2>
        <hr className="mb-8 mt-2 border-gray-300" />

        <form
          className="w-3/4"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleCreateProject();
          }}
        >
          <div className="text-sm font-semibold mb-2">Project name</div>
          <input
            value={projectName}
            className="bg-white p-4 border shadow rounded-xl w-full mb-4"
            placeholder="Project name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setProjectName(e.target.value);
            }}
          />

          <div className="text-sm font-semibold mb-2">Toolkit / SDK</div>
          <div className="mb-4 flex">
            <div className="bg-white p-4 rounded-lg shadow flex items-center mr-2 cursor-pointer hover:scale-105 transition duration-200 ease-in-out border-2 border-cyan-500">
              <FaReact className="text-2xl mr-2 text-blue-300" /> Front-end
            </div>
            <div className="bg-white p-4 rounded-lg shadow border flex items-center opacity-50 mr-2 relative overflow-hidden cursor-pointer">
              <span className="absolute top-0 left-0 text-[10px] font-semibold bg-orange-500 text-white px-2 rounded-br-lg">
                Not available
              </span>
              <FaGolang className="text-3xl mr-2 text-sky-500" /> Go Back-end
            </div>
            <div className="bg-white p-4 rounded-lg shadow border flex items-center opacity-50 mr-2 relative overflow-hidden cursor-pointer">
              <span className="absolute top-0 left-0 text-[10px] font-semibold bg-orange-500 text-white px-2 rounded-br-lg">
                Not available
              </span>
              <FaJava className="text-2xl mr-2 text-red-500" /> Java Back-end
            </div>
            <div className="bg-white p-4 rounded-lg shadow border flex items-center opacity-50 relative overflow-hidden cursor-pointer">
              <span className="absolute top-0 left-0 text-[10px] font-semibold bg-orange-500 text-white px-2 rounded-br-lg">
                Not available
              </span>
              <FaNodeJs className="text-2xl mr-2 text-green-500" /> Node.js Back-end
            </div>
          </div>

          <div className="text-sm font-semibold mb-2">Cloud provider</div>
          <div className="mb-4 flex">
            <div className="bg-white p-4 rounded-lg shadow flex items-center mr-2 cursor-pointer hover:scale-105 transition duration-200 ease-in-out border-2 border-cyan-500">
              <FcGoogle className="text-2xl mr-2" /> Google Cloud Platform
            </div>
            <div className="bg-white p-4 rounded-lg shadow border flex items-center mr-2 opacity-50 overflow-hidden relative cursor-pointer">
              <span className="absolute top-0 left-0 text-[10px] font-semibold bg-orange-500 text-white px-2 rounded-br-lg">
                Not available
              </span>
              <SiAmazonaws className="text-2xl mr-3 text-black" /> Amazon Web Services
            </div>
          </div>

          <button
            type="submit"
            className="font-medium px-6 rounded-xl p-3 bg-cyan-600 text-white hover:bg-cyan-500 shadow-md mt-4"
          >
            Create project
          </button>
        </form>
        <h2 className="text-2xl mt-12">JSON</h2>
        <hr className="mb-8 mt-2 border-gray-300" />
        <div className="code mt-4 p-4 rounded-lg text-cyan-100 bg-black border shadow w-3/4">
          {`
         {
          "name":"${projectName}",
          "organization_id": 1,
          "toolkit_id": 1
          }`}
        </div>
      </div>
    </div>
  );
};

export default Create;
