import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  token:any;

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }
  loginUser(details){

 return new Promise((resolve, reject) => {

       let headers = new Headers();
       headers.append('Content-Type', 'application/json');

       this.http.post("https://pod-api-mdr.herokuapp.com/api/login", JSON.stringify(details), {headers: headers})
         .subscribe(res => {

           let data = res.json();
           this.token = data.token;
           console.log(this.token)
           window.localStorage.setItem('token', this.token);
           console.log(window.localStorage);
           resolve(data);

           resolve(res.json());
         }, (err) => {
           reject(err);
         });
   });
 }
 
// forgotPassword(email: string) {
//         return Observable.fromPromise(this.firebase.auth().sendPasswordResetEmail(email));
//     }

 logout() {
        this.token.remove('id_token');
        this.token = null;
    }

getCode(data){
  return new Promise((resolve, reject) => {
  let headers = new Headers();
       headers.append('Content-Type', 'application/json');

  
   console.log(data)
   

  this.http.post('https://pod-api-mdr.herokuapp.com/api/user/verification-number',JSON.stringify(data), {headers: headers})
       .map(
         res => res.json())
       .subscribe(
         data => {
           resolve(data.user);
           console.log(data.user)
       }, (err) => {
         reject(err);
       });
   });
 }

 getCodeVerify(data){
  
  return new Promise((resolve, reject) => {
  let headers = new Headers();
       headers.append('Content-Type', 'application/json');
   console.log(data)
  this.http.post('https://pod-api-mdr.herokuapp.com/api/user/verify',JSON.stringify(data), {headers: headers})
       .map(
         res => res.json())
       .subscribe(
         data => {
           resolve(data);
           // console.log(data.user)
       }, (err) => {
         reject(err);
       });
   });
 }

 getUser(){
   return new Promise((resolve, reject) => {

     let headers = new Headers();
     headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
     
 
     this.http.get('https://pod-api-mdr.herokuapp.com/api/user', {headers: headers})
       .map(
         res => res.json())
       .subscribe(
         data => {
           resolve(data.data);
           console.log('data')
       }, (err) => {
         reject(err);
       });
   });
 }

 getExpenseActivity(){
   return new Promise((resolve, reject) => {

     let headers = new Headers();
     headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
     console.log('token')
     
 
     this.http.get('https://pod-api-mdr.herokuapp.com/api/expense/user', {headers: headers})
       .map(
         res => res.json())
       .subscribe(
         data => {
           resolve(data.data);
           console.log('data')
       }, (err) => {
         reject(err);
       });
   });
 }

 getGoal(){
   return new Promise((resolve, reject) => {

     let headers = new Headers();
     headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
     console.log('token')
     
 
     this.http.get('https://pod-api-mdr.herokuapp.com/api/goal/user/activities',
      {headers: headers})
       .map(
         res => res.json())
       .subscribe(
         data => {
           resolve(data.data);
           console.log('data')
       }, (err) => {
         reject(err);
       });
   });
 }

 getGoalHome(){
   return new Promise((resolve, reject) => {

     let headers = new Headers();
     headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
     console.log('token')
     
 
     this.http.get('https://pod-api-mdr.herokuapp.com/api/goal/user',
      {headers: headers})
       .map(
         res => res.json())
       .subscribe(
         data => {
           resolve(data.data);
           console.log('data')
       }, (err) => {
         reject(err);
       });
   });
 }
 registerUser(details){

   return new Promise((resolve, reject) => {

     let headers = new Headers();
     headers.append('Content-Type','application/json');
      console.log(details);
     this.http.post('https://pod-api-mdr.herokuapp.com/api/register', 
     JSON.stringify(details), {headers:headers}).subscribe(res => {
     
       let data = res.json();
       console.log(data);
       resolve(data);
     
     }, (err) => {
       reject(err);
     });   
   });
 }

 updateUserInfo(first_name,last_name,phone_number,user_image){

let data = {
  
  first_name : first_name,
  last_name : last_name,
  phone_number : phone_number,
  user_image : user_image
}
   return new Promise((resolve, reject) => {

     let headers = new Headers();
     headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
 
      console.log(window.localStorage.getItem('token'))
     this.http.post('https://pod-api-mdr.herokuapp.com/api/user/edit', data, {headers:headers})
     .subscribe(res => {
     
       let data = res.json();
       console.log('data');
       resolve(data);
     
     }, (err) => {
       reject(err);
     });   
   });
 }



 getCategoryExpense(){
   return this.http.get("https://pod-api-mdr.herokuapp.com/api/categories/expense")
   .map(res => res.json())
 }

 getCategoryGoal(){
   return this.http.get("https://pod-api-mdr.herokuapp.com/api/categories/goal")
   .map(res => res.json())
 }
 createGoal(details){

   return new Promise((resolve, reject) => {

     // let token_headers = new Headers();
     // token_headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));

     let headers = new Headers();
     headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
     headers.append('Content-Type','application/json');

     console.log('here')
      console.log(headers);
     this.http.post('https://pod-api-mdr.herokuapp.com/api/goal/create', JSON.stringify(details), {headers:headers})
     .subscribe(res => {
       let data = res;
       // let data = res.json();
       console.log(data);
       resolve(data);
     
     }, (err) => {
       reject(err);
     });   
   });
 }

 createExpense(details){

   return new Promise((resolve, reject) => {
     let headers = new Headers();
     headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
     headers.append('Content-Type','application/json');

     console.log('here')
      console.log(headers);
     this.http.post('https://pod-api-mdr.herokuapp.com/api/expense/create', JSON.stringify(details), {headers:headers})
     .subscribe(res => {
       let data = res;
       // let data = res.json();
       console.log(data);
       resolve(data);
     
     }, (err) => {
       reject(err);
     });   
   });
 // getUserInfo(){
 //   return this.http.get("https://pod-api-mdr.herokuapp.com/api/user/edit")
 //   .map(res => res.json())
 // }
}
}
