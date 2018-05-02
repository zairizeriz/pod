import { Component, ViewChild} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { AddexpensePage } from '../addexpense/addexpense';
import { HttpProvider } from '../../providers/http/http';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild(Slides) slides: Slides;

	expenses : any;
	totalExpenses:any;
  index:any;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController
   ,public httpprovider:HttpProvider,public loadingCtrl: LoadingController) {

  }

  ionViewDidEnter() {

    let months = new Date().getMonth()+1;
    this.index = months
    this.slides.slideTo(months - 1, 500);

    let loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading Please Wait...'
  });

    console.log(months)

  loading.present();

    this.httpprovider.getExpenseActivity(months).then(
     (response) => {
       console.log(response)
       this.expenses = response
       loading.dismiss();

       console.log(this.expenses)
      
     },
     err => {
       console.log(err);
     },
   );

    this.httpprovider.getExpenseTotalActivity(months).then(
     (response) => {
       console.log(response)
       this.totalExpenses=response
      

       
       console.log(this.totalExpenses)
     },
     err => {
       console.log(err);
     },
   );

}

onTap(){
    console.log(this.slides.clickedIndex - 1 )

    this.index = this.slides.clickedIndex - 1

    this.httpprovider.getExpenseActivity(this.slides.clickedIndex - 1 ).then(
      (response) => {
        console.log(response)
        this.expenses = response
        this.slides.slideTo(this.slides.clickedIndex - 2, 300);
      },
      err => {
        console.log(err);
      },
    );

    this.httpprovider.getExpenseTotalActivity(this.slides.clickedIndex -1 ).then(
     (response) => {
       console.log(response)
       this.totalExpenses=response
      
       this.slides.slideTo(this.slides.clickedIndex - 2, 300);
       
       console.log(this.totalExpenses)
     },
     err => {
       console.log(err);
     },
   );

  }


  presentProfileModal() {
   let profileModal = this.modalCtrl.create(AddexpensePage);
   profileModal.onDidDismiss(() => {
      this.ionViewDidEnter();
      
    });
   profileModal.present();
 }
}

