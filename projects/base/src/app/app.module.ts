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
import { FooterModule, HeaderModule, ButtonModule } from 'ngx-neo-ui';
import { HomeComponent } from './views/home/home.component';
import { OnlyNumberDirective } from './shared/directives/only-number.directive';
import { GenerateInputsDirective } from './shared/directives/generate-inputs.directive';
import { GenerateInputs3Directive } from './shared/directives/generate-inputs-3.directive';

@NgModule({
  declarations: [AppComponent, CounterComponent, HomeComponent, OnlyNumberDirective, GenerateInputsDirective, GenerateInputs3Directive],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
