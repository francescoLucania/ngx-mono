import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { CounterComponent } from './views/counter/counter.component';
import {
  FooterModule,
  HeaderModule,
  ButtonModule,
  ModalModule,
  IMediaQueriesParams,
  MEDIA_QUERY_CONFIG,
} from 'ngx-neo-ui';
import { HomeComponent } from './views/home/home.component';

const mediaQueriesConfig: IMediaQueriesParams = {
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

@NgModule({
  declarations: [AppComponent, CounterComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AppEffects]),
    HeaderModule,
    FooterModule,
    ButtonModule,
    ModalModule,
  ],
  providers: [
    {
      provide: MEDIA_QUERY_CONFIG,
      useValue: mediaQueriesConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
