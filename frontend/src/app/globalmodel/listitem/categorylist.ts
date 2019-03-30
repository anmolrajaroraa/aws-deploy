import {Productlist} from "./productList"
export class Subcategorylist{

        subcategoryId:string;
        subcategoryName:string;
        products:Productlist[];

        constructor(subcategoryId,subcategoryName,productId,productName,subproductId,  subproductName,description,benfitsAndUses,amount,suffix,price,discount,imageurlarray){
        this.subcategoryId= subcategoryId;
        this.subcategoryName= subcategoryName;
        this.products=[];
        this.products.push(new Productlist(productId,productName,subproductId,subproductName,description,benfitsAndUses,amount,suffix,price,discount,imageurlarray));
        }
}