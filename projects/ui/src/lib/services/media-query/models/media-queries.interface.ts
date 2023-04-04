export interface IMediaQueriesInterface {
  enable: {
    mq: boolean;
    mqDevice: boolean;
  };
  mqBreakpoints?: ((string | number)[] | null)[] | null;
}

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
