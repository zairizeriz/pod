import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
// import { HomePage } from '../../pages/home/home';
import { ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AddGoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html',
})
export class AddGoalPage {
	goal= {};
  categories:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public httpprovider:HttpProvider, private toastCtrl: ToastController, 
    public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    
    this.httpprovider.getCategory().subscribe(
     response => {
       console.log(response)
       this.categories=response.data
     },
     err => {
       console.log(err);
     },
     ()=>{
     console.log('List of categories')
   }
   );
  }
addGoalForm(){

  console.log(this.goal);
  let toast = this.toastCtrl.create({
    message: 'Goal was added successfully',
    duration: 10000,
    position: 'middle'
  });

  toast.present();
  toast.dismiss();
     this.httpprovider.createGoal(this.goal).then((result) => {
                
     },
         (err) => {
         console.log(err);
     });
 }

 dismiss() {
   this.viewCtrl.dismiss();
 }

}
