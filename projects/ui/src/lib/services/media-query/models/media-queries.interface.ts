import { InjectionToken } from '@angular/core';

export const MEDIA_QUERY_CONFIG = new InjectionToken<IMediaQueriesInterface>('mediaQueriesConfig');

export interface IMediaQueriesInterface {
  enable: {
    mq: boolean;
    mqDevice: boolean;
  };
  mqBreakpoints?: TMqBreakpoints[];
}

export type TMqBreakpoints = [string, number];

export interface IDeviceType {
  deviceSize: {
    mq: {
      sm: boolean;
      md: boolean;
      lg: boolean;
    };
    width: number;
  };
  deviceType: TDeviceType;
}

export type TDeviceType = 'sm' | 'md' | 'lg';

export interface IBreakpoint { int: number, str: string }
