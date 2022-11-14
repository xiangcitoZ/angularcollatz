import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { MenucollatzComponent } from './components/menucollatz/menucollatz.component';

@NgModule({
  declarations: [
    AppComponent,
    CollatzComponent,
    MenucollatzComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
