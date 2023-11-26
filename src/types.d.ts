import type { TDeviceType } from '@packlify/core';

declare global {
  export interface IDevice {
    type?: TDeviceType;
  }

  export interface IDarkMode {
    mode: 'light' | 'dark';
  }

  export interface IComponent {
    children?: React.ReactNode;
    className?: string;
    device?: IDevice;
  }

  export interface IInitialState {
    [key: string]: unknown;
  }

  export interface IViewProps {
    initialState: IInitialState;
    device: IDevice;
  }

  export interface PFYUser {
    id?: string;
    email: string;
  }
}
