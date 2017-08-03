import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PropDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-prop-details',
  templateUrl: 'prop-details.html',
})
export class PropDetailsPage {
	property: any;
  propertyList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //model array for Demo
    this.propertyList =
    {
      title: 'house No 1',
      desc: 'abcdef',
      img: 'assets/prop1.jpg',
      city: 'city',
      state: 'state',
      bedrooms: '4',
      bathrooms: '4',
      price: '550'


    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropDetailsPage');

  }

}
