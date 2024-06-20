import { AbstractControl } from "@angular/forms";

export function valdetorname(valdetor:RegExp){
  return (control:AbstractControl)=>{
    const valdetors=valdetor.test(control.value)
    return valdetors?{'valditer':{value:control.value}}:null
  }
}