import Header from '@/shared/components/header/Header';

const Projects = ({ device }: { device: IDevice }) => {
  return (
    <div>
      <Header title="Projects" subtitle="Here you can manage your projects." />
      <div className="px-16 py-8"></div>
    </div>
  );
};

export default Projects;
