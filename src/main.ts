import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgbdTableCompleteModule } from './app/table-complete.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(NgbdTableCompleteModule)
  .catch((err) => console.error(err));
// .then((ref) => {
//   // Ensure Angular destroys itself on hot reloads.
//   if (window['ngRef']) {
//     window['ngRef'].destroy();
//   }
//   window['ngRef'] = ref;

//   // Otherwise, log the boot error
// })
