import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProspectoModule } from './prospecto/prospecto.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Configuration } from './data/ConfigSystems/constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ProspectoModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers:  [Configuration],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
