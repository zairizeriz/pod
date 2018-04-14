import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { LoadingController } from 'ionic-angular';
import { AddexpensePage } from '../addexpense/addexpense';
import { HttpProvider } from '../../providers/http/http';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	expenses : any;
	totalExpenses=0;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController
   ,public httpprovider:HttpProvider,public loadingCtrl: LoadingController) {

  }
//   presentLoadingDefault() {
//   let loading = this.loadingCtrl.create({
//     content: 'Please wait...'
//   });

//   loading.present();

//   setTimeout(() => {
//     loading.dismiss();
//   }, 5000);
// }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

  loading.present();

    this.httpprovider.getExpenseActivity().then(
     (response) => {
       console.log(response)
       this.expenses = response
       loading.dismiss();
       for(let index = 0; index < this.expenses.length; index++) {
	       this.totalExpenses += this.expenses[index].amount
	       console.log(this.totalExpenses)
	       console.log(this.expenses[index].amount)
		}
       console.log(this.expenses)

       

     },
     err => {
       console.log(err);
     },
   );

}

  // openAddExpenses(){
  // 	this.navCtrl.push(AddexpensePage);
  // }

  presentProfileModal() {
   let profileModal = this.modalCtrl.create(AddexpensePage);
   profileModal.onDidDismiss(() => {
      this.ionViewDidLoad();
      
    });
   profileModal.present();
 }
}

