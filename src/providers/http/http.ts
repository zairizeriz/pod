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
 registerUser(details){

   return new Promise((resolve, reject) => {

     let headers = new Headers();
     headers.append('Content-Type','application/json');
      console.log(details);
     this.http.post('https://pod-api-mdr.herokuapp.com/api/register', JSON.stringify(details), {headers:headers})
     .subscribe(res => {
     
       let data = res.json();
       console.log(data);
       resolve(data);
     
     }, (err) => {
       reject(err);
     });   
   });
 }

 getCategory(){
   return this.http.get("https://pod-api-mdr.herokuapp.com/api/categories")
   .map(res => res.json())
 }
}
