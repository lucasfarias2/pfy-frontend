import { Route, Routes } from 'react-router-dom';
import Page from '@/shared/components/page/Page';
import Cloud from './Cloud';
import Create from './pages/Create';
import Projects from './pages/Projects';

export default function Router(props: IViewProps) {
  const { device, initialState } = props;

  return (
    <Page initialState={initialState} device={device}>
      <Routes>
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/cloud/forge" element={<Create />} />
        <Route path="/cloud/projects" element={<Projects />} />
        <Route path="/cloud/users" element={<Projects />} />
      </Routes>
    </Page>
  );
}
