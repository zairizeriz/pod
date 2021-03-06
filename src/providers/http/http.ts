import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class HttpProvider {
  token: any;

  constructor(public http: Http) {
    console.log("Hello HttpProvider Provider");
  }
  loginUser(details) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/login",
          JSON.stringify(details),
          { headers: headers }
        )
        .subscribe(
          res => {
            let data = res.json();
            this.token = data.token;
            console.log(this.token);
            window.localStorage.setItem("token", this.token);
            console.log(window.localStorage);
            resolve(data);

            resolve(res.json());
          },
          err => {
            reject(err);
          }
        );
    });
  }

  // forgotPassword(email: string) {
  //         return Observable.fromPromise(this.firebase.auth().sendPasswordResetEmail(email));
  //     }

  logout() {
    this.token.remove("id_token");
    this.token = null;
  }

  getCode(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      console.log(data);

      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/user/verification-number",
          JSON.stringify(data),
          { headers: headers }
        )
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data.user);
            console.log(data.user);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getCodeVerify(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      console.log(data);
      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/user/verify",
          JSON.stringify(data),
          { headers: headers }
        )
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
            // console.log(data.user)
          },
          err => {
            reject(err);
          }
        );
    });
  }

  forgotPassword(email) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      console.log(email);
      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/reset-password",
          JSON.stringify(email),
          { headers: headers }
        )
        .map(res => res.json())
        .subscribe(
          email => {
            resolve(email);
            // console.log(data.user)
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getUser() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );

      this.http
        .get("https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/user", {
          headers: headers
        })
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data.data);
            console.log("data");
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getExpenseActivity(months) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );
      console.log("token");

      this.http
        .get(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/expense/user/m" +
            months,
          { headers: headers }
        )
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data.data);
            console.log("data");
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getExpenseTotalActivity(months) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );
      console.log("token");

      this.http
        .get(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/expense/month/" +
            months +
            "/total",
          { headers: headers }
        )
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data.data);
            console.log("data");
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getGoal() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );
      console.log("token");

      this.http
        .get(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/goal/user/activities",
          { headers: headers }
        )
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
            console.log("data");
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getGoalHome() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );
      console.log("token");

      this.http
        .get(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/goal/user",
          { headers: headers }
        )
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data.data);
            console.log(data.data);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getSavingAmount(type) {
    return new Promise((resolve, reject) => {
      console.log(type);
      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );
      console.log("token");

      this.http
        .get(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/saving-amount?type=" +
            type,
          { headers: headers }
        )
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
            console.log(data);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  saving(amount) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );
      // headers.append('Content-Type','application/json');

      let data = {
        amount: amount
      };
      console.log(amount);

      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/goal/saving",
          data,
          { headers: headers }
        )
        .subscribe(
          res => {
            let data = res;
            // let data = res.json();
            console.log(data);
            resolve(data);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  registerUser(details) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      console.log(details);
      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/register",
          JSON.stringify(details),
          { headers: headers }
        )
        .subscribe(
          res => {
            let data = res.json();
            console.log(data);
            resolve(data);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  updateUserInfo(first_name, last_name, phone_number, user_image) {
    let data = {
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      user_image: user_image
    };
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );

      console.log(window.localStorage.getItem("token"));
      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/user/edit",
          data,
          { headers: headers }
        )
        .subscribe(
          res => {
            let data = res.json();
            console.log("data");
            resolve(data);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  updateGoalInfo(amount) {
    let data = {
      amount: amount
      // last_name : last_name,
      // phone_number : phone_number,
      // user_image : user_image
    };
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );

      console.log(window.localStorage.getItem("token"));
      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/goal/edit-goal",
          data,
          { headers: headers }
        )
        .subscribe(
          res => {
            let data = res.json();
            console.log("data");
            resolve(data);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getCategoryExpense() {
    return this.http
      .get(
        "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/categories/expense"
      )
      .map(res => res.json());
  }

  getCategoryGoal() {
    return this.http
      .get(
        "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/categories/goal"
      )
      .map(res => res.json());
  }
  createGoal(details) {
    return new Promise((resolve, reject) => {
      // let token_headers = new Headers();
      // token_headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));

      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );
      headers.append("Content-Type", "application/json");

      console.log("here");
      console.log(headers);
      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/goal/create",
          JSON.stringify(details),
          { headers: headers }
        )
        .subscribe(
          res => {
            //  let data = res;
            let data = res.json();

            resolve(data);
            console.log(data);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  createGoalType(goal_type) {
    return new Promise((resolve, reject) => {
      // let token_headers = new Headers();
      // token_headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
      console.log(goal_type);

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      console.log("here");
      console.log(headers);
      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/goal/saving/type",
          JSON.stringify(goal_type),
          { headers: headers }
        )
        .subscribe(
          res => {
            let data = res;
            // let data = res.json();
            console.log(data);
            resolve(data);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  createExpense(details) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("token")
      );
      headers.append("Content-Type", "application/json");

      console.log("here");
      console.log(headers);
      this.http
        .post(
          "https://api-pod.mdr-tech.com.my/pod-api-mdr/public/api/expense/create",
          JSON.stringify(details),
          { headers: headers }
        )
        .subscribe(
          res => {
            let data = res;
            console.log(data);
            resolve(data);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
