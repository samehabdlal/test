import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ipostes } from './Ipostes';
import { PostessService } from './postess.service';
import { tick } from '@angular/core/testing';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrl: './postes.component.scss',
})
export class PostesComponent implements OnInit ,OnDestroy{
  constructor(private httppost: PostessService) {}

  messageerorrs:Subscription
  ngOnInit(): void {
    // this.messageerorrs=this.httppost.erorse$.subscribe(erormaseg=>{
    //   this.erors=erormaseg
    //   setTimeout(() => {
    //   }, 3000);
    // })
  }
  posts: Ipostes[] = [];
  Oncreatpost(Ipostes: { titel: string; content: string }) {
    this.httppost.addserver(Ipostes.content, Ipostes.titel);
  }
  erors=''

  OnGetposts() {
    this.httppost.gtedata().subscribe({
      next:data=>{
        this.posts=data
        console.log(data);
      },error:erors=>{
        this.erors=erors
        setTimeout(() => {
          this.erors=''
        }, 2000);
      }
      
    })
  }
OnclearData(){
  this.httppost.cleardata().subscribe(()=>{
      this.posts=[]
  })
}
ngOnDestroy(): void {
  this.messageerorrs.unsubscribe()
}
}
