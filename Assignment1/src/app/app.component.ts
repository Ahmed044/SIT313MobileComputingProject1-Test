import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Custom Pages
import { FavouritePage } from '../pages/favourite/favourite';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';

//Custom Storage Provider
import { StorageProvider } from '../providers/storage/storage'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //set app first page
  rootPage: any = LoginPage;

  //side menu pages
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storageProvider : StorageProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    //side menu pages model list
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Favourites', component: FavouritePage },
      { title: 'Logout', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
