import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {
  HomePage,
  DetailPage,
} from "../pages/index.paginas";
import { MiproviderProvider } from '../providers/miprovider/miprovider';
import { TabProvider } from '../providers/tab/tab';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MiproviderProvider,
    TabProvider
  ]
})
export class AppModule {}
