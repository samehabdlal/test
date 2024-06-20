import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  filtersstatus=''
  serve:any=[
    {
      inctyncetype: 'medium',
      namess: 'productionserver',
      status: 'stabel',
      started: new Date(1,7,2018),
      Badget:'2000',
      serverloadingtime:'22.768'
    },

    {
      inctyncetype: "large",
      namess: "production server",
      status: 'offline',
      started: new Date(12/1/2005),
      Badget:'8000',
      serverloadingtime:'22.768'
    },

    {
      inctyncetype: 'smail',
      namess: 'productionserver',
      status: 'label',
      started: new Date(12/1/2005),
      Badget:'5000',
      serverloadingtime:'2.768'
    },
    {
      inctyncetype: 'smail',
      namess: 'productionserver',
      status: 'inlabel',
      started: new Date(12/1/2005),
      Badget:'7000',
      serverloadingtime:'22.768'
    }
  ];
  
  getclass(server: {
    inctyncetype: string;
    name: string;
    status: string;
    started: string;
    Badget:string,
    serverloadingtime:string
  }) {
    return {
      'list-group-item-success': server.status === 'stabel',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'inlabel',
    };
  }
  onaddserver(){
    this.serve.push({
      inctyncetype: "large",
      namess: "production server",
      status: 'stabel',
      started: new Date(12/1/2005),
      Badget:'8000',
      serverloadingtime:'22.768'
    })
  }
}
