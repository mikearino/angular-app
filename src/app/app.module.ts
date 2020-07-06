import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

// This is the first thing that gets run in the browser. It will load the component
// IE look for bootstrap
@NgModule({
  declarations: [AppComponent, ServerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
