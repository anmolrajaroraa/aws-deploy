

export class priceAndAmount{
    amount:string;
     suffix:string;
      price:string;
      discount:string;

      constructor(amount,suffix,price,discount){
        this.amount =amount;
        this.suffix=  suffix;
         this.price = price;
         this.discount = discount;
   
      }

}