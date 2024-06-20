import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ipost } from './posts';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit,OnDestroy  {
  Loadposts: Ipost[] = [];
  Isloading: boolean = false;
  errors=''
  erorrssubscribe:Subscription
  constructor(private postservice: PostsService) {}

  ngOnInit(): void {
    this.erorrssubscribe=this.postservice.erorrs$.subscribe(erorsmaseg=>{
      this.errors=erorsmaseg
    })
  }
  Oncreatpost(postdata: { titel: string; content: string }) {
    this.postservice.creatpost(postdata.titel, postdata.content);
  }

  Onfetshpost() {
    this.postservice.fetchposts().subscribe({
      next: (posts) => {
        this.Isloading = false;
        this.Loadposts = posts;
        console.log(posts);
      },
      error:error=>{
        console.log(error);
        this.errors = error.message
        setTimeout(() => {
          this.errors=''
        }, 2000);
      }
    });
  
  }
  OnClearpost() {
    this.postservice.DeteltPosts().subscribe(()=>{
      this.Loadposts=[]
    })
  }

  ngOnDestroy(): void {
    this.erorrssubscribe.unsubscribe()
  }
}
