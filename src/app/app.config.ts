import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideTranslation } from './config/translate-loader.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
    provideHttpClient(withFetch())
  ]
};
