import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
// import { HomePage } from '../../pages/home/home';
import { ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import{ GoalNamePage } from '../goal-name/goal-name';
import{ GoalTargetAmountPage } from '../goal-target-amount/goal-target-amount';
import{ GoalDueDatePage } from '../goal-due-date/goal-due-date';
import{ GoalCategoryPage } from '../goal-category/goal-category';
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
  goal_image:any;

  goal_name:any;
  amount:any;
  due_date:any;
  category_id:any;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public httpprovider:HttpProvider, private toastCtrl: ToastController, 
    public viewCtrl:ViewController,private camera: Camera) {
    // this.goal_name=window.localStorage.getItem('goal_name');;
    // this.amount=window.localStorage.getItem('amount');
    // this.due_date=window.localStorage.getItem('due_date');
    // this.category_id=window.localStorage.getItem('category_id');
    // console.log(this.goal_name)
    // console.log(this.amount)
    // console.log(this.due_date)
    // console.log(this.category_id)


    // this.goal_name=this.navParams.get('goal_name');
    // this.amount=this.navParams.get('amount');
    // this.due_date=this.navParams.get('due_date');
    // this.category_id=this.navParams.get('category_id')
  }

  ionViewDidLoad() {
    
    this.httpprovider.getCategoryGoal().subscribe(
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

  goalTargetCategory() {
    // this.httpprovider.logout();
    this.navCtrl.push(GoalCategoryPage);
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
 this.goal_image = imageData
 console.log(this.goal_image)
 // this.user.user_image = imageData
 // console.log(this.user.user_image)
}, (err) => {
 // Handle error
});
}
addGoalForm(){

  // console.log(this.goal);
 
     let goal = {
       goal_name: window.localStorage.getItem('goal_name'),
       amount:window.localStorage.getItem('amount'),
       date:window.localStorage.getItem('due_date'),
       category_id:window.localStorage.getItem('category_id'),
       goal_image:this.goal_image
       // goal_image:"data:image/png;base64,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"



     }
console.log(goal)

     this.httpprovider.createGoal(goal).then((result) => {
            let toast = this.toastCtrl.create({
              message: 'Goal was added successfully',
              duration: 10000,
              position: 'middle'
            });

            toast.present();    
     },
         (err) => {
         console.log(err);
     });
 }
}
