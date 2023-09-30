const Projects = ({ device }: { device: IDevice }) => {
  return (
    <div>
      <div className="py-8 px-16 bg-cyan-700 shadow-lg relative">
        <h1 className="text-4xl text-white">Projects</h1>
        <p className="text-lg text-white/80">Here you can manage your current projects.</p>
      </div>
      <div className="px-16 py-8"></div>
    </div>
  );
};

export default Projects;
