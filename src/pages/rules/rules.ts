import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { SaveMoneyPage } from '../save-money/save-money'

/**
 * Generated class for the RulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rules',
  templateUrl: 'rules.html',
})
export class RulesPage {

  amount:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RulesPage');
  }


goalPage(){
	this.navCtrl.setRoot(TabsPage)
}

  savePage(type){
    this.navCtrl.setRoot(TabsPage)
  }
}
