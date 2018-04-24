import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';


/**
 * Generated class for the ExpensesCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenses-category',
  templateUrl: 'expenses-category.html',
})
export class ExpensesCategoryPage {
  categories:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public httpprovider: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensesCategoryPage');
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



expenseCat(excat_id,excat_name){
  window.localStorage.setItem('excategory_id', excat_id);
   window.localStorage.setItem('excategory_name', excat_name);
    this.navCtrl.pop()
}
}
