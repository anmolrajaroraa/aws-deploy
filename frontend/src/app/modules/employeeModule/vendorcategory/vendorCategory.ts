import { Component, ElementRef } from "@angular/core";

import {category} from "../../../globalmodel/listitem/category";
import { FormGroup,FormControl, FormArray,Validators,FormGroupDirective,NgForm, FormBuilder } from '@angular/forms';
import { CategoryJsonretriever } from 'src/app/globalServices/categorylistjson';


@Component({
    selector:'vendorCategory',
    templateUrl:'vendorCategory.html',
    styleUrls:['vendorCategory.css'],
    
})

export class vendorCategory{
    private nodelvl;
    private nodeValue;
    private isPresent:boolean=false;
    public vendorform:FormGroup;
    public isRead=true;
    category:category[];
    private selectedList:Array<category>=[];
  constructor(private fb:FormBuilder, private categoryjson:CategoryJsonretriever){
    this.categoryjson.jsonretrieve().subscribe(data=>{
         this.category=data;
         
     }
     )

    }

    nestedobjIteration(iterationobj,mainobj,maxnodeLvl){
     console.log(this.nodelvl);
    
   
         if(this.nodelvl<=maxnodeLvl){
            
         if(mainobj!=null){
             
             
         for(let key in mainobj){
             
          for(let pushkey in iterationobj){
              
              
          if(key==pushkey){
             
              
              if(typeof(iterationobj[pushkey])=='object'){

                console.log('object type')
                  iterationobj[pushkey].forEach(obj => {
                      mainobj[key].forEach(newobj => {
                        
                        if(obj[Object.keys(obj)[0]]== newobj[Object.keys(newobj)[0]]){
                   
                    this.nodelvl++;  
                    if(this.nodelvl>3){
                        this.nodelvl=0;
                    } 
                    this.nestedobjIteration(obj,newobj,maxnodeLvl)
                        
                             
            }
            });
                   
                  
                });  
              }
              else if(typeof(iterationobj[pushkey])!='object'){
                
                 if(mainobj[key]==iterationobj[pushkey]){
                if(this.nodelvl==maxnodeLvl){
                    this.nodeValue=mainobj;
                    this.nodelvl;  
                    this.isPresent=true;
                   
                   
               
                }
                
              
               
            }else {
                return;
            }
              } else{
                 return ;
        }
    
    }
       }}
  
         }
         else{
             return ;;
         }
         }else{
             return this.isPresent ;
         }    
    
    return this.isPresent;
    }


    isExist(pushobj:category,mainobj){
    let maxnodeLvl=4;
    while(this.isPresent!=true && maxnodeLvl!=0){
        maxnodeLvl--;
        this.nodelvl=1;
        this.nodeValue=null;
        this.isPresent=false;
    this.nestedobjIteration(pushobj,mainobj,maxnodeLvl);
   
} 
     this.isPresent=false;
       return maxnodeLvl;
    }




addorEdit(pushobj:category){
    let isInthisObject=false;
    let i =0;
     if(this.selectedList.length>0){
        while(!isInthisObject && !isInthisObject && i < this.selectedList.length){
let mainobj = this.selectedList[i];
    if(this.isExist(pushobj,mainobj)==2){
        isInthisObject=true;
       mainobj.subcategory.forEach(element => {
          
          if(element.subcategoryId==this.nodeValue.subcategoryId){
             element.products.push(pushobj.subcategory[0].products[0]);
               }
            });
    
  
     } 
    else if(this.isExist(pushobj,mainobj)==1){
        isInthisObject=true;
        mainobj.subcategory.push(pushobj.subcategory[0]);

    } 
    else{
        isInthisObject=false;
    }
i++;    
}
      if(!isInthisObject){
           this.selectedList.push(pushobj);
      }
}
   else{
         this.selectedList.push(pushobj);
   }
  console.log(this.selectedList);
}
  
deleteObj(deleteObj){
    let isAnyelementPresent=null;
    let subElement=null;
    let mainobj=null;
    if(this.selectedList.length>0){
       for(let k =0;k<this.selectedList.length;k++){
           mainobj=this.selectedList[k];
            if(this.isExist(deleteObj,mainobj)==3){
             
                mainobj.subcategory.forEach(element => {
                  let deleteIndex=null;
                    for(let i=0;i< element.products.length;i++){
                          let product = element.products[i];
                         if(product.productId==deleteObj.subcategory[0].products[0].productId){
                             deleteIndex=i;
                            
                         }
                     }
                     if(deleteIndex!=null){
                     element.products.splice(deleteIndex,1);
                   } }
                    );
            
           
             } 
            
             for(let i=0;i< mainobj.subcategory.length;i++){
                isAnyelementPresent=mainobj.subcategory[i];
                    if(isAnyelementPresent.products.length>0){
                for(let j=0;j< isAnyelementPresent.products.length;j++){
                    subElement= isAnyelementPresent.products[i]
                        if(subElement==null){
                            mainobj.subcategory[i].products.splice(j,1);
     
                        }
                      }}
                      else{
                          mainobj.subcategory.splice(i,1);
                   } }
                   if(mainobj.subcategory.length==0){
                this.selectedList.splice(k,1);
                        
                    
                
                }
            }
          
        }       
}



pushObject(categoryId,categoryName,subcategoryId,subcategoryName,productId,productName,event){
    let pushobj = new category(categoryId,categoryName,subcategoryId,subcategoryName,productId,productName,null,null,null,null,null,null,null,null,null);
if(event.checked){
   this.addorEdit(pushobj);
}
else if(!event.checked){
this.deleteObj(pushobj);



}

}

  


allowinput(element:ElementRef){
    this.isRead=!this.isRead;
}
  
setValue(event:Event){
    console.log(event.srcElement);
}

}