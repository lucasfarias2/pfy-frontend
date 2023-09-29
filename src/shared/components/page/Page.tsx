import Layout from '@/shared/components/layout/Layout';
import { DarkModeContext } from '@/shared/contexts/DarkModeContext';
import { DeviceContext } from '@/shared/contexts/DeviceContext';

const Page = ({ children, initialState, device }: IProps) => {
  return (
    <DeviceContext.Provider value={{ type: device?.type }}>
      <DarkModeContext.Provider value={{ mode: 'light' }}>
        <Layout>{children}</Layout>
      </DarkModeContext.Provider>
    </DeviceContext.Provider>
  );
};

interface IProps extends IComponent {
  withNavbar?: boolean;
  initialState?: IInitialState;
  device: IDevice;
  darkMode?: boolean;
}

export default Page;
