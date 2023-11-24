import { renderComponent } from '@packlify/core';
import Register from '@/shared/views/register/Register';

export function render(url: string, props: IInitialState) {
  return renderComponent({ Component: Register, url, props, withRouter: true });
}
