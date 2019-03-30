import { priceAndAmount } from './priceAndAmount';

export class subproductInfo{
    
        description:string;
        benefitsAndUses:string;
        priceAndAmount:priceAndAmount[];
        constructor(description,benfitsAndUses,amount,suffix,price,discount){
            this.description = description;
            this.benefitsAndUses = benfitsAndUses;
            this.priceAndAmount=[];
           this.priceAndAmount.push(new priceAndAmount(amount,suffix,price,discount));
        }
       
}