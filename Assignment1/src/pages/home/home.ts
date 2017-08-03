import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PropDetailsPage } from '../prop-details/prop-details';
import { DetailFirstPage } from '../detail-first/detail-first';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	propertyList: any;

  constructor(public navCtrl: NavController) {

    this.propertyList = [
  	{
  		title: 'house # 1',
  		desc: 'description',
  		img: 'assets/prop1.jpg',
  		city: 'city',
  		state: 'state',
  		bedrooms: '4',
  		bathrooms: '4',
  		price: '1$'


  	},
  	{
  		title: 'house # 2',
  		desc: 'description',
  		img: 'assets/prop1.jpg',
  		city: 'city',
  		state: 'state',
  		bedrooms: '2',
  		bathrooms: '3',
  		price: '1$'


  	},
  	{
  		title: 'house # 3',
  		desc: 'description',
  		img: 'assets/prop1.jpg',
  		city: 'city',
  		state: 'state',
  		bedrooms: '1',
  		bathrooms: '2',
  		price: '1$'


  	},


  	]



  }
  propDetails(val){

  	// this.navCtrl.push(PropDetailsPage,{"property": val});
    this.navCtrl.push(PropDetailsPage);

  }

}
