const Create = ({ device }: { device: IDevice }) => {
  return (
    <div>
      <div className="py-8 px-16 bg-neutral-700 shadow-lg relative">
        <h1 className="text-4xl text-white">Create a new project</h1>
        <p className="text-lg text-white/80">Fill our the information to get started with a new project</p>
      </div>
      <div className="px-16 py-8">
        <h2 className="text-2xl">Project details</h2>
        <hr className="mb-8 mt-2 border-gray-300" />

        <form className="w-3/4">
          <input className="bg-white p-4 border shadow rounded-xl w-full mb-4" placeholder="Service name" />
          <input className="bg-white p-4 border shadow rounded-xl w-full mb-4" placeholder="Project name" />
          <input className="bg-white p-4 border shadow rounded-xl w-full mb-4" placeholder="Cloud provider" />
        </form>
        <h2 className="text-2xl mt-16">Configuration</h2>
        <hr className="mb-8 mt-2 border-gray-300" />
      </div>
    </div>
  );
};

export default Create;
