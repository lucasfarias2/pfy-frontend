import { Route, Routes } from 'react-router-dom';
import Page from '@/shared/components/page/Page';
import Cloud from './Cloud';

export default function Router(props: IViewProps) {
  const { device, initialState } = props;

  return (
    <Page initialState={initialState} device={device}>
      <Routes>
        <Route path="/cloud" element={<Cloud />} />
      </Routes>
    </Page>
  );
}
