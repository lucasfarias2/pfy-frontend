import Page from '@/shared/components/page/Page';
import HomeNavbar from './components/navbar/HomeNavbar';

export default function Home() {
  return (
    <Page navbar={<HomeNavbar />}>
      <div className="py-8 px-32 bg-white">
        <h1 className="text-4xl font-semibold">Home</h1>
      </div>
    </Page>
  );
}
