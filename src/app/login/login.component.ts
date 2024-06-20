import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { valdetorname } from '../valditor/valditionnames';
import { Observable } from 'rxjs';
import { fomfarmpasword } from '../valditor/confirm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  constructor(private fd:FormBuilder){}
  // get uer(){
  //   return this.regstform.get('username')
  // }
adminsnames:RegExp=/admin/
valdnum:RegExp=/111/
  regstform= this.fd.group({
    password:['',[
      valdetorname(this.valdnum)
    ]],
    createmails:this.fd.array([]),
    subscirpe:[''],
    confirmpassword:[''],
    username:['',[
      Validators.required,
      Validators.minLength(5),
      valdetorname(this.adminsnames)
    ]]
  },{valdetor:[fomfarmpasword]})

  getlogin(name:string){
    return this.regstform.get(name)
  }
  
  requiredpasward(){
    this.regstform.get('subscirpe')?.valueChanges.subscribe(chsnges=>{
      const emils=this.regstform.get('password')
      if(chsnges){
        emils?.setValidators(Validators.required)
      }
      else{
        emils?.clearValidators()
      }
      emils?.updateValueAndValidity
    })
  }
  get createmails(){
    return this.regstform.get('createmails') as FormArray
  }
  Onaddemils(){
    this.createmails.push(this.fd.control(''))
  }
  deletemais(index:number){
    this.createmails.removeAt(index)
  }
  pushdata(){
    this.regstform.patchValue({
      username:'1212121',
      password:'55555555555'
    })
  }
}
