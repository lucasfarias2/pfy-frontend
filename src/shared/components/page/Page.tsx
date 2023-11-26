import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/shared/components/layout/Layout';
import { DarkModeContext } from '@/shared/contexts/DarkModeContext';
import { DeviceContext } from '@/shared/contexts/DeviceContext';

const Page = ({ children, device, navbar, footer, initialState }: IProps) => {
  const queryClient = new QueryClient();

  return (
    <DeviceContext.Provider value={{ type: device?.type }}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={initialState}>
          <DarkModeContext.Provider value={{ mode: 'light' }}>
            <Layout navbar={navbar} footer={footer}>
              {children}
            </Layout>
          </DarkModeContext.Provider>
        </HydrationBoundary>
      </QueryClientProvider>
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
