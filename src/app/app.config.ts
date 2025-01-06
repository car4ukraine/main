import {ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay, withIncrementalHydration} from '@angular/platform-browser';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions()
    ),
    provideClientHydration(
      withEventReplay(),
      withIncrementalHydration()
    ),
    provideHttpClient(),
    provideExperimentalZonelessChangeDetection(),
    // provideZoneChangeDetection({
    //   eventCoalescing: true,
    //   runCoalescing: true
    // }),
  ]
};
