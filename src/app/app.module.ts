import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioPageComponent } from './bio-page/bio-page.component';
import { TitlePageComponent } from './title-page/title-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BioPageComponent,
    TitlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
