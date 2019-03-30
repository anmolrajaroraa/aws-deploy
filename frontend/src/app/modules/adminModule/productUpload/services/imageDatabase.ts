import {Injectable} from "@angular/core";


import {of as ObservableOf, BehaviorSubject} from "rxjs";
import { ImageCrud } from './imageCrud';
import { ImageObj } from '../model/imageObject';
@Injectable()

export class ImageDatabase{
private isDone:boolean=false;

   private imageChange:BehaviorSubject<ImageObj> = new BehaviorSubject<ImageObj>(null); 
  
    constructor(private imageCrud:ImageCrud){
      
}

 public setimageObj(){

 }

 public getimageObj(){
return this.imageChange;
 }


      uploadFile(form:FormData){
        this.imageCrud.uploadFile(form).subscribe(data=>{
    
                console.log(data);
                this.imageChange.next(data);  
                this.isDone=true;  
                

            },err=>{
                alert('Failure In Upload');
                  this.isDone=false;
            }
         
         
         )
       
         return this.isDone;
      }
      
     


        }
