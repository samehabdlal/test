import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost } from './posts';
import { Subject, map } from 'rxjs';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  erorrs$=new Subject<string>()
  Islogeen=true
  constructor(private Http: HttpClient) {}
  creatpost(titel: string, content: string) {
    const postdata: Ipost = { content: content, titel: titel };
    this.Http.post(
      'https://http-group1-230a0-default-rtdb.firebaseio.com/posts.json',
      postdata
    ).subscribe({
      next:data=>{
      },
      error:erors=>{
        this.erorrs$.next(erors.message)
      }
    })
  }

  fetchposts() {
    // params
   let sershparams=new  HttpParams()
    sershparams=sershparams.append('params',1)
    sershparams=sershparams.append('size',20)
    // params
    return this.Http.get<{ [key: string]: Ipost }>(
      'https://http-group1-230a0-default-rtdb.firebaseio.com/posts.json',
   {
    headers:new HttpHeaders({'ssss':'ssss'}) ,
    params:sershparams
   },
    ).pipe(
      map((responseData: { [key: string]: Ipost }) => {
        const postarry = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postarry.push({ ...responseData[key], id: key });
          }
        }
        return postarry;
      })
    );
  }
  
  DeteltPosts() {
   return   this.Http.delete('https://http-group1-230a0-default-rtdb.firebaseio.com/posts.json')
  }
}
