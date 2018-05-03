import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the EditGoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-goal',
  templateUrl: 'edit-goal.html',
})
export class EditGoalPage {
	goal = {
    // goal_name : "",
    // target_date :"",
    amount: "",
    // current_amount:"",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	private toastCtrl: ToastController, public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditGoalPage');
  }
updateGoalForm(){
  let toast = this.toastCtrl.create({
    message:'Goal successfully updated' ,
    duration: 10000,
    position: 'bottom'
  });

  toast.present();

  console.log(this.goal);
  toast.dismiss();

     this.httpprovider.updateGoalInfo(
     this.goal.amount).then((result) => {
     // this.viewCtrl.dismiss();
     },
         (err) => {
         console.log(err);
     });
       this.navCtrl.pop();
 }
    
    goBack(){
    this.navCtrl.pop();
  }   
}

