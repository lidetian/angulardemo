import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-home11',
  templateUrl: './home11.component.html',
  styleUrls: ['./home11.component.css']
})
export class Home11Component implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    let data = this.requestService.getData();
    console.log(data);

    this.requestService.getCallbackData((data)=>{
      console.log(data);
    });

    let promise = this.requestService.getPromiseData();
    promise.then((data)=>{
      console.log(data);
    })

    let rxjsData = this.requestService.getRxjsData();
    let cancel = rxjsData.subscribe((data) => {
      console.log(data);
    });

    setTimeout(() => {
      cancel.unsubscribe();
    }, 1000);

    let rxjsdataInterval = this.requestService.getRxjsIntervalData();
    rxjsdataInterval.subscribe((data) => {
      console.log(data);
    })

    let rxjsdataNumber = this.requestService.getRxjsIntervalNum();
    rxjsdataNumber.pipe(
      filter((value:any) =>{
        if(value%2==0){
          return true;
        }
      }),
      map((value:any) =>{
        return value * value;
      })
    ).subscribe((data) => {
      console.log(data);
    })

    // rxjsdataNumber.pipe(
    //   map((value:any) =>{
    //     return value * value;
    //   })
    // ).subscribe((data) => {
    //   console.log(data);
    // })
  }

}
