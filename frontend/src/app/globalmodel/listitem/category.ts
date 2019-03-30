import {Subcategorylist} from "./categorylist";
export class category{
    categoryId:string;
    categoryName:string;
    subcategory:Subcategorylist[];


    constructor(categoryId,categoryName,subcategoryId,subcategoryName,productId,productName,subproductId,  subproductName,description,benfitsAndUses,amount,suffix,price,discount,imageurlarray){
this.categoryId=categoryId;
this.categoryName=categoryName;
this.subcategory=[];
this.subcategory.push(new Subcategorylist(subcategoryId,subcategoryName,productId,productName,subproductId,subproductName,description,benfitsAndUses,amount,suffix,price,discount,imageurlarray))
    }
  
}