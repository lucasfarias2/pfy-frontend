import Layout from '@/shared/components/layout/Layout';
import { DarkModeContext } from '@/shared/contexts/DarkModeContext';
import { DeviceContext } from '@/shared/contexts/DeviceContext';

const Page = ({ children, device, navbar, footer }: IProps) => {
  return (
    <DeviceContext.Provider value={{ type: device?.type }}>
      <DarkModeContext.Provider value={{ mode: 'light' }}>
        <Layout navbar={navbar} footer={footer}>
          {children}
        </Layout>
      </DarkModeContext.Provider>
    </DeviceContext.Provider>
  );
};

interface IProps extends IComponent {
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
  initialState?: IInitialState;
  device?: IDevice;
  darkMode?: boolean;
}

export default Page;
