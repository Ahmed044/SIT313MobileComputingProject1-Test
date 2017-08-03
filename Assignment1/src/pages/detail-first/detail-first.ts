import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PropDetailsPage } from '../prop-details/prop-details';
import { HomePage } from '../home/home';
/**
 * Generated class for the DetailFirstPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-first',
  templateUrl: 'detail-first.html',
})
export class DetailFirstPage {
	loop: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailFirstPage');
  }
  move(){
this.navCtrl.push(HomePage);

}
}
