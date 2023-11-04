import { renderComponent } from '@packlify/core';
import CloudRouter from '@/shared/views/cloud/CloudRouter';

export function render(url: string, props: IInitialState) {
  return renderComponent({ Component: CloudRouter, url, props, withRouter: true });
}
