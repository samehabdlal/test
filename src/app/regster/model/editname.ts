import { AbstractControl } from "@angular/forms"

export function editname(edit:RegExp){
    return  (control:AbstractControl)=>{
    const valditeros=edit.test(control.value)
    return valditeros ? {'valditors':{value:control.value}} :null
    }
}