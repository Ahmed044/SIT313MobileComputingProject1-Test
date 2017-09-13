import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //Page life cycle method
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //Custom Navigation Methods
  navigateToSignUp(){
  	this.navCtrl.push(SignupPage);
  }

  navigateToHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
