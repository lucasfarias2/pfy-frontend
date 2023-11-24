import { Route, Routes } from 'react-router-dom';
import Page from '@/shared/components/page/Page';
import Cloud from './Cloud';
import CloudNavbar from './components/CloudNavbar';

export default function Router(props: IViewProps) {
  const { device, initialState } = props;

  return (
    <Page initialState={initialState} device={device} navbar={<CloudNavbar />}>
      <Routes>
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/cloud/projects" element={<Cloud />} />
        <Route path="/cloud/users" element={<Cloud />} />
        <Route path="/cloud/settings" element={<Cloud />} />
      </Routes>
    </Page>
  );
}
