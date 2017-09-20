import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PropDetailsPage } from '../prop-details/prop-details';

//
import { AlertController } from 'ionic-angular';

//custom network provider
import { NetworkProvider } from '../../providers/network/network'

//loader
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-forumslist',
  templateUrl: 'forumslist.html'
})
export class forumslist {

	propertyList: any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public networkProvider : NetworkProvider, public loadingCtrl: LoadingController) {

    this.propertyList = []

  }
  propDetails(val){

  	// this.navCtrl.push(PropDetailsPage,{"property": val});
    this.navCtrl.push(PropDetailsPage);

  }

  //
  ionViewDidLoad() {
    console.log('ionViewDidLoad forumlist');
  }

  ionViewWillEnter(){
    console.log('will enter forumlist');    

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present()
    this.networkProvider.callForumslistApi().then(
      data => {

        this.propertyList = data
        loading.dismiss();
        console.log('success')
        console.log('Login Data:');
        console.log(data);
        
      }, (error) => {
        console.log('error');
        loading.dismiss();
        this.presentAlert('oops', 'something went wrong')
        // this.presentToast(error);//error is string,
      }
  ), () => { 
    loading.dismiss();
    this.presentAlert('oops', 'something went wron')
    console.log('error')
    console.log('failure')
  };

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
