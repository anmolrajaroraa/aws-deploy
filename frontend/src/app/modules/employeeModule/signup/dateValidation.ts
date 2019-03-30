import { FormControl } from '@angular/forms';

export function dateValidation(control:FormControl):{[key:string]:boolean}{

if(control.value){
    return null;   
}
return {"pattern":true}
}