import { LuAlertTriangle } from 'react-icons/lu';
import Button from '@/shared/components/button/Button';
import Page from '@/shared/components/page/Page';
import Footer from './components/footer/Footer';
import HomeNavbar from './components/navbar/HomeNavbar';

export default function Home() {
  return (
    <Page navbar={<HomeNavbar />} footer={<Footer />}>
      <div className="py-8 px-32 bg-white">
        <div className="h-48 bg-zinc-100 rounded-2xl mb-8 flex items-center justify-center text-zinc-400 text-lg flex-col">
          This is a private alpha version of the app. Use at your own risk and please report any incident.
          <Button text="Report" className="mt-4" size="sm" icon={LuAlertTriangle} />
        </div>
      </div>
    </Page>
  );
}
