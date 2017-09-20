import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { forumslist } from '../forumslist/forumslist'

/**
 * Generated class for the DetailFirstPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-homePage',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // Page life cycle Methods
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailFirstPage');
  }

  move(){

    this.navCtrl.push(forumslist);

  }

}
