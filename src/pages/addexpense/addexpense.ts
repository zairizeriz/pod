import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
// import { ContactPage } from '../../pages/contact/contact';
import { ViewController } from 'ionic-angular'
import { ToastController } from 'ionic-angular';
import { ExpensesCategoryPage } from '../expenses-category/expenses-category';


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
  date:''
};
category:any;
excategory_id:any;

  constructor(public navCtrl: NavController, public viewCtrl:ViewController, 
    public navParams: NavParams, public httpprovider: HttpProvider,
    private toastCtrl: ToastController) {
    
  }

 ionViewDidEnter() {
   this.excategory_id=window.localStorage.getItem('excategory_id')
   this.category=window.localStorage.getItem('excategory_name')
   console.log(this.category)
 }

 dismissModal() {
    this.viewCtrl.dismiss();
   }


 addExpanseForm(){

   console.log(window.localStorage.getItem('excategory_id'))
   console.log(this.excategory_id)
   let expense = {
       
       category_id: this.excategory_id,
      amount : this.expense.amount,
      expense_name : this.expense.expense_name,
      date:this.expense.date


     }


   

   if (this.expense.amount === "" || this.expense.date === "") {
      console.log('lalu')
           let toast = this.toastCtrl.create({
             message: 'Please fill required',
             duration:3000,
             position: 'bottom'
           });
           toast.present();
    }
    else{

  console.log(expense);
  
  

     this.httpprovider.createExpense(expense).then((result) => {
       let toast = this.toastCtrl.create({
    message: 'Expense was added successfully',
    duration: 3000,
    position: 'bottom'
  });

 

       
        localStorage.removeItem("excategory_id");  
          localStorage.removeItem("excategory_name");
           toast.present();
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
expenseModal(){
  this.navCtrl.push(ExpensesCategoryPage);
}
}
