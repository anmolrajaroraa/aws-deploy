import { Component,OnInit } from "@angular/core";
import { FormGroup,FormControl, Validators,FormGroupDirective,NgForm } from '@angular/forms';
import { Jsonretriever } from 'src/app/globalServices/jsonretreiver';
import{ statedetails} from '../../../globalmodel/statedetails';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
    selector:'header',  
    templateUrl:'header.component.html',
    styleUrls:["header.component.css"]
})

export class customerheaderComponent implements OnInit{
    display:boolean;
    statelist:statedetails[];
    searchQuery:FormGroup;
    address:FormGroup;
    Options: string[] = ['Milk', 'Tin','Jacket'];
    filteredOptions: Observable<string[]>; 
 constructor(private jsonretriever:Jsonretriever){

 }



 loadstates():void{ 
    this.jsonretriever.jsonretrieve().subscribe(data => this.statelist = data);
  
              }

ngOnInit(){
    this.display=false;
    this.loadstates();
    this.searchQuery= new FormGroup({
        searchlist: new FormControl()
    })
    this.address=new FormGroup({
        state: new FormControl('valid',[Validators.required]),
   

    })
    this.filteredOptions = this.searchQuery.get('searchlist').valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
 }

    
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
    
        return this.Options.filter(option => option.toLowerCase().includes(filterValue));
            }
  
  

displayblock(){
    if(this.display==false)
    this.display=true;
    else
    this.display=false;
}
}