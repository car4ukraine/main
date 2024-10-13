import {ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions()
    ),
    provideClientHydration(),
    provideExperimentalZonelessChangeDetection(),
    // provideZoneChangeDetection({
    //   eventCoalescing: true,
    //   runCoalescing: true
    // }),
  ]
};
