import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Ipostes } from './Ipostes';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostessService {
  constructor(private http:HttpClient) { }
  erorse$=new Subject<string>()
  addserver(titel:string,content:string){
   
    const alldata:Ipostes={content:content,titel:titel}
  this.http.post('https://http-group1-230a0-default-rtdb.firebaseio.com/opjects.json',alldata)
.subscribe({
  next:data=>{
    console.log(data);
  },error:erors=>{
   this.erorse$.next(erors.message)
  }
}) 
}
gtedata(){
  // return this.http.get<{[key:string]:Ipostes}>
  // ('https://http-group1-230a0-default-rtdb.firebaseio.com/opjects.json').pipe(
  //   map((responseData: {[key : string]:Ipostes}) =>{
  //     const postsarry=[]
  //         for(const key in responseData){
  //           if(responseData[key]){
  //           postsarry.push({...responseData[key],id:key})
  //           }
  //         }
  //         return postsarry
  //   })
  // )

 return this.http.get<{[key : string]:Ipostes}>
 ('https://http-group1-230a0-default-rtdb.firebaseio.com/opjects.json').pipe(
    map((Responses:{[key:string]:Ipostes})=>{
      const postarry=[]
      for (const key in Responses) {
        if(Responses[key]){
           postarry.push({...Responses[key],id:key})
        }
      }
      return postarry
    })
  )
}
cleardata(){
 return this.http.delete('https://http-group1-230a0-default-rtdb.firebaseio.com/opjects.json')
}
}
