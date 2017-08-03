import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavouritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage {
	properties: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.properties = [{

  		'title': 'property title',
  		'city': 'abc',
  		'state': 'las angles',
  		'price': '4400000',

  	},
  	{

  		'title': 'property title',
  		'city': 'abc',
  		'state': 'las angles',
  		'price': '4400000',

  	},
  	
  	{

  		'title': 'property title',
  		'city': 'abc',
  		'state': 'las angles',
  		'price': '4400000',

  	},
  	
  	{

  		'title': 'property title',
  		'city': 'abc',
  		'state': 'las angles',
  		'price': '4400000',

  	},
  	
  	{

  		'title': 'property title',
  		'city': 'abc',
  		'state': 'las angles',
  		'price': '4400000',

  	},
  	

  	]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritePage');
  }

}
