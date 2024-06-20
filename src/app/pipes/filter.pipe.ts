import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterstring:string , propname:string): any {
    if(value.length===0 , filterstring===''){
       return value
    }
    else{
      const reseltarry=[]
      for (let server of value) {
        if(server[propname] ===filterstring){
          reseltarry.push(filterstring)
        }
      }
      return reseltarry
    }
  }

}
