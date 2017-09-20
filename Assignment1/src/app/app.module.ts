import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//networking
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Custom pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PropDetailsPage } from '../pages/prop-details/prop-details';
import { FavouritePage } from '../pages/favourite/favourite';
import { forumslist } from '../pages/forumslist/forumslist';
//local storage
import { IonicStorageModule } from '@ionic/storage';

//custom providers
import { StorageProvider } from '../providers/storage/storage';
import { NetworkProvider } from '../providers/network/network';
import { SecurityProvider } from '../providers/security/security';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    PropDetailsPage,
    FavouritePage,
    ListPage,
    forumslist
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    PropDetailsPage,
    FavouritePage,
    ListPage,
    forumslist
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StorageProvider,
    NetworkProvider,
    SecurityProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
