import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { SaveMoneyPage } from '../save-money/save-money';
import { HttpProvider } from '../../providers/http/http'

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
  goal:any;
  id:any

  constructor(public navCtrl: NavController, public loading:LoadingController, public httpProvider:HttpProvider, public navParams: NavParams, public toastCtrl:ToastController) {
    this.goal = this.navParams.get('goal');
    console.log(this.goal.id)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RulesPage');
    this.goal = this.navParams.get('goal');
    console.log(this.goal.id)
  }


goalPage(){
	this.navCtrl.setRoot(TabsPage)
}

  savePage(type){

    let goal_type = {
      type : type,
      goal_id : this.goal.id
    }

    let loading = this.loading.create({
      spinner: 'ios',
      content: 'Loading Please Wait...'
    });
    loading.present()
console.log(goal_type)
    this.httpProvider.createGoalType(goal_type).then(
      (response) => {

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
        loading.dismiss();
        this.navCtrl.setRoot(TabsPage)

      },
    err => {
      console.log(err);
      loading.dismiss()
    })
    

  }
}
