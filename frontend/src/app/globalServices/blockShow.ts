import { Directive, ElementRef, HostListener,Renderer, HostBinding } from "@angular/core";

@Directive({
    selector:"[blockShow]"
})

export class blockShow{
   
    constructor(private el:ElementRef,private renderer:Renderer){
       
    }

    @HostListener('click', ['$event']) onclick(event:Event){
        let grandparent = this.el.nativeElement.parentNode.parentNode.parentNode.getElementsByClassName('hide');
        
       for(let element of grandparent){
                this.renderer.setElementStyle(element,'display','none');
              }

              let childrennode = this.el.nativeElement.parentNode.querySelector('.hide')

              if(childrennode.style.display!="block"){
        this.renderer.setElementStyle(childrennode,'display','block');
       
      }else{
        this.renderer.setElementStyle(childrennode,'display','none');
      }
     
    }
    
            
            
       }
      
    
   
