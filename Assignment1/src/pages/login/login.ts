import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

//
import { AlertController } from 'ionic-angular';

//custom network provider
import { NetworkProvider } from '../../providers/network/network'

//loader
import { LoadingController } from 'ionic-angular';

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

  input = { "username" : "", "password" : "" }

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public networkProvider : NetworkProvider, public loadingCtrl: LoadingController) {
  }

  //Page life cycle method
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //Custom Navigation Methods
  navigateToSignUp(){
  	this.navCtrl.push(SignupPage);
  }

  //login custom method
  login(){

    if (this.input.username.length < 1){
      this.presentAlert('oops', 'username is empty')
      return
    }else if (this.input.username.length > 0 && this.input.username.length < 6){
      this.presentAlert('oops', 'username should not be less than 6 characters.')
      return
    }else if (this.input.password.length < 1){
      this.presentAlert('oops', 'password is empty')
      return
    }else if (this.input.password.length > 0 && this.input.password.length < 6){
      this.presentAlert('oops', 'password should not be less than 6 characters.')
      return
    }

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present()
    this.networkProvider.callUserLoginApi(this.input).then(
      data => {

        loading.dismiss();
        console.log('success')
        console.log('Login Data:');
        console.log(data);
        
        this.navigateToHome()

      }, (error) => {
        console.log('error');
        loading.dismiss();
        this.presentAlert('oops', 'user not found')
        // this.presentToast(error);//error is string,
      }
  ), () => { 
    loading.dismiss();
    this.presentAlert('oops', 'user not found')
    console.log('error')
    console.log('failure')
  };

  }

  //home navigation
  navigateToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  //present alert
  presentAlert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
