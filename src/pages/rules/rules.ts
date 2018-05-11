import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RulesPage');
  }


goalPage(){
	this.navCtrl.setRoot(TabsPage)
}

  savePage(type){
    
    if(type == 1){
      let toast = this.toastCtrl.create({
        message:'You Set To Save By Daily' ,
        duration: 3000,
        position: 'middle'
      });

      toast.present();
    }else{
      let toast = this.toastCtrl.create({
        message:'You Set To Save By Weekly' ,
        duration: 3000,
        position: 'middle'
      });

      toast.present();
    }

    this.navCtrl.setRoot(TabsPage)
  }
}
