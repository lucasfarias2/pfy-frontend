import { renderComponent } from '@packlify/core';
import HomeRouter from '@/shared/views/home/HomeRouter';

export function render(url: string, props: IInitialState) {
  return renderComponent({ Component: HomeRouter, url, props, withRouter: true });
}
