import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { ViewController } from 'ionic-angular'


/**
 * Generated class for the GoalactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goalactivity',
  templateUrl: 'goalactivity.html',
})
export class GoalactivityPage {
  goals:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController ,public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
   this.httpprovider.getGoal().then(
     (response) => {
       console.log(response)
       this.goals = response
       for(let index = 0; index < this.goals.length; index++) {
         
    }
       console.log(this.goals)

       

     },
     err => {
       console.log(err);
     },
   );
}
dismiss() {
   this.viewCtrl.dismiss();
 }
}