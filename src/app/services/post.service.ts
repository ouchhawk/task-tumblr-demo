import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }


  apiUrl = "/api/read/json";

  getRawData(): Observable<any> {
    return this.httpClient.get(this.apiUrl,{ responseType: 'text' });    
  }

  // convertTumblrApiRead(){
  //   return eval(this.getRawData());
  // }

  getPosts(): Observable<Post>{
    console.log(this.httpClient.get<Post>(this.apiUrl));
    return this.httpClient.get<Post>(this.apiUrl);

  }
}
