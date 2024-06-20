import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Iuser } from './model/user-model';
import { editname } from './model/editname';

@Component({
  selector: 'app-regster',
  templateUrl: './regster.component.html',
  styleUrl: './regster.component.scss',
})
export class RegsterComponent {
  userregsterforms!: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.userregsterforms = new FormGroup({ (1)
    //   fullname: new FormControl('',[Validators.required]),
    //   email: new FormControl(''),
    //   adrees: new FormGroup({
    //     city: new FormControl(''),
    //     postalcode: new FormControl(''),
    //     street: new FormControl(''),
    //   }),
    //   M_number: new FormControl(''),
    //   password: new FormControl(''),
    //   confirmpassword: new FormControl(''),
    // });

    this.userregsterforms = fb.group({
      fullname: ['', [Validators.required]],
      email: [''],
      adrees: fb.group({
        city: [''],
        postalcode: [''],
        street: [''],
      }),
      M_number: [''],
      password: [''],
      confirmpassword: [''],
    });
  }
  get username() {
    return this.userregsterforms.get('fullname');
  }
  bluckname:RegExp=/demo/
fulldata(){
  this.userregsterforms.patchValue({
    fullname: ['', [Validators.required,editname(this.bluckname)]],
    email:'sameh@jh',
    adrees:{
      city: 'cairo',
      postalcode: '012',
      street: '020',
    },
    M_number: '01017729427',
    password: '1111111111',
    confirmpassword: '1111111111', 
  })
}
deletdetails(){
  this.userregsterforms.value
}

}
