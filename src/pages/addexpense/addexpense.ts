import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { ContactPage } from '../../pages/contact/contact';


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
expense= {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider) {
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

 addExpanseForm(){

  console.log(this.expense);

     this.httpprovider.createExpense(this.expense).then((result) => {
                
     },
         (err) => {
         console.log(err);
     });
 }
 closePage() {
    this.navCtrl.setRoot(ContactPage);
  }
}
