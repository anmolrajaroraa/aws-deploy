import {SubProduct} from "./subProduct"
export class Productlist{
    
    
        productId:string;
        productName:string;
        subProducts:SubProduct[]

        constructor(productId,productName,subproductId,subproductName,description,benfitsAndUses,amount,suffix,price,discount,imageurlarray){
    this.productId= productId;
      this.productName = productName;
      this.subProducts=[];
      this.subProducts.push(new SubProduct(subproductId,subproductName,description,benfitsAndUses,amount,suffix,price,discount,imageurlarray));
        }
    }
