import { renderComponent } from '@packlify/core';
import DashboardRouter from '@/shared/views/dashboard/DashboardRouter';

export function render(url: string, props: IInitialState) {
  return renderComponent({ Component: DashboardRouter, url, props, withRouter: true });
}
