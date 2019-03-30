import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DialogDataService {

  public dialogdataSource = new BehaviorSubject({});
  public pushdata = new BehaviorSubject({});

  constructor() { }

  updateDataSource(obj) {
    console.log(obj)
    this.dialogdataSource.next(obj)
  }

  updatePushObj(obj){
      this.pushdata.next(obj);

  }
}