import { renderComponent } from '@packlify/core';
import Login from '@/shared/views/login/Login';

export function render(url: string, props: IInitialState) {
  return renderComponent({ Component: Login, url, props, withRouter: true });
}
