import { Route, Routes } from 'react-router-dom';
import Page from '@/shared/components/page/Page';
import Create from './Create';
import Home from './Home';
import Projects from './Projects';

const HomeRouter = (props: IViewProps) => {
  const { device, initialState } = props;

  return (
    <Page initialState={initialState} device={device}>
      <Routes>
        <Route path="/" element={<Home device={device} />} />
        <Route path="/create" element={<Create device={device} />} />
        <Route path="/projects" element={<Projects device={device} />} />
      </Routes>
    </Page>
  );
};

export default HomeRouter;
