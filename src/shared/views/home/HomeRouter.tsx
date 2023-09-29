import { Route, Routes } from 'react-router-dom';
import Page from '@/shared/components/page/Page';
import Home from './Home';

const HomeRouter = (props: IViewProps) => {
  const { device, initialState } = props;

  return (
    <Page initialState={initialState} device={device}>
      <Routes>
        <Route path="/" element={<Home device={device} />} />
      </Routes>
    </Page>
  );
};

export default HomeRouter;
