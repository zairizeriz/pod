import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
// import { HomePage } from '../../pages/home/home';
import { ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import{ GoalNamePage } from '../goal-name/goal-name';
import{ GoalTargetAmountPage } from '../goal-target-amount/goal-target-amount';
import{ GoalDueDatePage } from '../goal-due-date/goal-due-date';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  base64Image:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public httpprovider:HttpProvider, private toastCtrl: ToastController, 
    public viewCtrl:ViewController,private camera: Camera) {
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
 goalName() {
    // this.httpprovider.logout();
    this.navCtrl.push(GoalNamePage);
  }

  goalTargetAmount() {
    // this.httpprovider.logout();
    this.navCtrl.push(GoalTargetAmountPage);
  }

  goalTargetDate() {
    // this.httpprovider.logout();
    this.navCtrl.push(GoalDueDatePage);
  }
openCamera(){
     const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}
this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:

 this.base64Image = 'data:image/jpeg;base64,' + imageData;
 // this.user.user_image = imageData
 // console.log(this.user.user_image)
}, (err) => {
 // Handle error
});
}
}
