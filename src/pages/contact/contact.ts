import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddexpensePage } from '../addexpense/addexpense';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  openAddExpenses(){
  	this.navCtrl.push(AddexpensePage);
  }

}
