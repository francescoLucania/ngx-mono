import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IDeviceType, IMediaQueriesInterface } from './models/media-queries.interface';

export const MEDIA_QUERY_CONFIG = new InjectionToken<IMediaQueriesInterface>('mediaQueriesConfig');

export const MEDIA_QUERY_CONFIG_BASE: IMediaQueriesInterface = {
  enable: {
    mq: true,
    mqDevice: false,
  },
  mqBreakpoints: [
    ['sm', 767], // max-width
    ['md', 768], // min-width
    ['lg', 1140], // min-width
  ],
};

@Injectable({
  providedIn: 'root',
})
export class MediaQueriesService {
  private _deviceType$ = new BehaviorSubject<IDeviceType | null>(null);
  public deviceType$ = this._deviceType$.asObservable();

  private _deviceTypeParams: any;

  private _windowResize$: Observable<Event>;

  private _mq = {
    sm: null,
    md: null,
    lg: null,
  };
  private _mqParams = {
    sm: null,
    md: null,
    lg: null,
  };

  // @ts-ignore
  constructor(@Inject(MEDIA_QUERY_CONFIG) private config: IMediaQueriesInterface) {
    console.log('config ', config);
    this._windowResize$ = fromEvent(window, 'resize');
    this.init();
    this._windowResize$.pipe(debounceTime(800)).subscribe(() => this.init());
  }

  private init(): void {
    this._deviceTypeParams = {
      deviceType: this.getType(),
      deviceSize: this.getDeviceSizeData(),
    };
    this._deviceType$.next(this._deviceTypeParams);
  }

  private createMq(array: any[]): void {
    const mqDevice = this.config.enable.mqDevice ? 'device-' : '';

    array.forEach((element: any, index: any) => {
      const mqRange = index === 0 ? 'max' : 'min';

      // @ts-ignore
      this._mq[element[0]] = {
        int: element[1],
        str: '(' + mqRange + '-' + mqDevice + 'width: ' + element[1] + 'px)',
      };
    });
  }

  public getType(): string {
    // @ts-ignore
    this.createMq(this.config.mqBreakpoints);

    let displayWidthType = '';
    // @ts-ignore
    if (window.matchMedia(this._mq.sm.str).matches) {
      displayWidthType = 'sm';
    }
    // @ts-ignore
    if (window.matchMedia(this._mq.md.str).matches) {
      displayWidthType = 'md';
    }
    // @ts-ignore
    if (window.matchMedia(this._mq.lg.str).matches) {
      displayWidthType = 'lg';
    }

    return displayWidthType;
  }

  public getDeviceSizeData(): { size: string; mq: any; width: number } {
    // @ts-ignore
    this.createMq(this.config.mqBreakpoints);

    let resultSize = '';

    Object.keys(this._mq).forEach(key => {
      // @ts-ignore
      this._mqParams[key] = window.matchMedia(this._mq[key].str).matches;
      // @ts-ignore
      if (this._mqParams[key]) {
        resultSize = key;
      }
    });

    return {
      size: resultSize,
      mq: this._mqParams,
      width: (window as any).innerWidth,
    };
  }

  public getDeviceParams(): string {
    return this._deviceTypeParams;
  }
}
