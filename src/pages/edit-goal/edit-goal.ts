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

  homeGoal:any;
  goalsHome = {
    goal_name : "",
    amount :"",
    date :"",
    goal_image:"",
    current_amount:0


  }
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	private toastCtrl: ToastController, public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditGoalPage');

   this.httpprovider.getGoalHome().then(
     (response) => {
       console.log(response)
       
       this.homeGoal = response
       
       this.goalsHome.amount = this.homeGoal.amount;
       
     },
     err => {
       console.log(err);
     },
   );
  }
updateGoalForm(){
  

     this.httpprovider.updateGoalInfo(
     this.goal.amount).then((result) => {
       let toast = this.toastCtrl.create({
    message:'Goal successfully updated' ,
    duration: 3000,
    position: 'bottom'
  });

  toast.present();

  console.log(this.goal);
 
     // this.viewCtrl.dismiss();
     },
         (err) => {
         
           let toast = this.toastCtrl.create({
          message: "Goal failed to update. Please use valid amount",
           duration: 3000,
          position: 'bottom'

  });
         toast.present();

         console.log('lalu');
         console.log(err);
     });
       this.navCtrl.pop();
 }
    
    goBack(){
    this.navCtrl.pop();
  }   
}

