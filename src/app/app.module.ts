import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioPageComponent } from './bio-page/bio-page.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { WebAppService } from './web-app.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LikeButtonComponent } from './like-button/like-button.component';


@NgModule({
  declarations: [
    AppComponent,
    BioPageComponent,
    TitlePageComponent,
    LikeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'My firebase App'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [WebAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
