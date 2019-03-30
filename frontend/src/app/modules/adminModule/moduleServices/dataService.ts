import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { category } from 'src/app/globalmodel/listitem/category';

@Injectable()
export class DataService {

  public dataSource = new BehaviorSubject([]);
  

  constructor() { }

  updateDataSource(obj) {
    
    this.dataSource.next(obj)
  }

}