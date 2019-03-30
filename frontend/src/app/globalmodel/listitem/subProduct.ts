
import { subproductInfo } from './subproductInfo';
export class SubProduct{
    subproductId:string;
    subproductName:string
    info:subproductInfo;
    imageUrls;
    constructor( subproductId,subproductName,description,benfitsAndUses,amount,suffix,price,discount,imageurl){
this.subproductId=subproductId;
this.subproductName=subproductName;
this.info =new subproductInfo(description,benfitsAndUses,amount,suffix,price,discount);
 this.imageUrls=[];
 if(imageurl!=null && imageurl[0]!=null){
this.imageUrls=imageurl;
    }
}
}