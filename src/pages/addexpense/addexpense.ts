import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
// import { ContactPage } from '../../pages/contact/contact';
import { ViewController } from 'ionic-angular'
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the AddexpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addexpense',
  templateUrl: 'addexpense.html',
})
export class AddexpensePage {

categories:any;
expense= {
  amount:'',
  expense_name:'',
  date:'',
  category_id:'',
};

  constructor(public navCtrl: NavController, public viewCtrl:ViewController, 
    public navParams: NavParams, public httpprovider: HttpProvider,
    private toastCtrl: ToastController) {
  }

 ionViewDidLoad() {

     this.httpprovider.getCategoryExpense().subscribe(
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

 dismissModal() {
    this.viewCtrl.dismiss();
   }


 addExpanseForm(){
   if (this.expense.expense_name === "" || this.expense.category_id === "" || this.expense.amount === "" || this.expense.date === "") {
      console.log('lalu')
           let toast = this.toastCtrl.create({
             message: 'Please fill required',
             duration:3000,
             position: 'middle'
           });
           toast.present();
    }
    else{

  console.log(this.expense);
  let toast = this.toastCtrl.create({
    message: 'Expense was added successfully',
    duration: 3000,
    position: 'middle'
  });

  toast.present();
  toast.dismiss();

     this.httpprovider.createExpense(this.expense).then((result) => {
       this.viewCtrl.dismiss();
                
     },
         (err) => {
         console.log(err);
     });
 }
 // closePage() {
 //    this.navCtrl.setRoot(ContactPage);
 //  }

  
}
}
