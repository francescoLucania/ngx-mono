import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {
  IBreakpoint,
  IDeviceType,
  IMediaQueriesInterface,
  MEDIA_QUERY_CONFIG,
  TMqBreakpoints,
} from './models/media-queries.interface';

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

  private _mq: {[key: string]: IBreakpoint} = {};
  private _mqParams: string[] = [];

  constructor(@Optional() @Inject(MEDIA_QUERY_CONFIG) private config: IMediaQueriesInterface) {
    if (!this.config) {
      this.config = MEDIA_QUERY_CONFIG_BASE;
    }
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

  private createMq(array: TMqBreakpoints[] | undefined): void {
    const mqDevice = this.config.enable.mqDevice ? 'device-' : '';

    array?.forEach((element: TMqBreakpoints, index: number) => {
      const mqRange = index === 0 ? 'max' : 'min';
      const key = element[0];
      this._mq[key] = {
        int: element[1],
        str: '(' + mqRange + '-' + mqDevice + 'width: ' + element[1] + 'px)',
      };
    });
  }

  public getType(): string {
    this.createMq(this.config.mqBreakpoints);
    let displayWidthType = '';

    for (const item in this._mq) {
      if (window.matchMedia(this._mq[item].str).matches) {
        displayWidthType = item;
      }
    }
    return displayWidthType;
  }

  public getDeviceSizeData(): { size: string; mq: any; width: number } {
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
