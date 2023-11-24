import { Route, Routes } from 'react-router-dom';
import Page from '@/shared/components/page/Page';
import Dashboard from './Dashboard';

export default function Router(props: IViewProps) {
  const { device, initialState } = props;

  return (
    <Page initialState={initialState} device={device}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Page>
  );
}
