import Page from '@/shared/components/page/Page';
import useCurrentUser from '@/shared/hooks/useCurrentUser';
import Footer from '../home/components/footer/Footer';
import HomeNavbar from '../home/components/navbar/HomeNavbar';

export default function Dashboard(props: IViewProps) {
  const user = useCurrentUser();

  return (
    <Page navbar={<HomeNavbar />} footer={<Footer />} {...props}>
      Logged in with: {user?.email}
    </Page>
  );
}
