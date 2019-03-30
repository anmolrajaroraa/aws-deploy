import { Directive, ElementRef, HostListener,Renderer, HostBinding } from "@angular/core";

@Directive({
    selector:"[toggle]"
})

export class toggle{
   
    constructor(private el:ElementRef,private renderer:Renderer){
       
    }

    @HostListener('click', ['$event']) onclick(event:Event){
        let childrennode = this.el.nativeElement.parentNode.querySelector('.hide');
 
    if(childrennode!=null){   
    if(childrennode.style.display!="block"){
        this.renderer.setElementStyle(childrennode,'display','block');
       
      }else{
        this.renderer.setElementStyle(childrennode,'display','none');
      }
     
    }}
    
} 