import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getData(){
    return "this is a service data";
  }

  getCallbackData(callback){
    setTimeout(() => {
      let data = "callback";
      callback(data);
      return data;
    }, 1000);
  }

  getPromiseData(){
    return new Promise((resolve)=>{
      setTimeout(() => {
        let data = "promise";
        resolve(data);
      }, 1000);
    })
  }

  getRxjsData(){
    return new Observable((observer) => {
      setTimeout(() => {
        let data = "rxjs";
        observer.next(data);
      }, 3000);
    })
  }

  getRxjsIntervalData(){
    let count = 0;
    return new Observable((observer) => {
      setInterval(() => {
        count++;
        let data = "rxjs interval" + count;
        observer.next(data);
      }, 1000);
    })
  }

  getRxjsIntervalNum(){
    let count = 0;
    return new Observable((observer) => {
      setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);
    })
  }
}
