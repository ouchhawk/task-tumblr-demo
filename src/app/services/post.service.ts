import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Root } from '../models/root';


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

  getPosts(): Observable<Root>{
    console.log(this.httpClient.get<Root>(this.apiUrl));
    return this.httpClient.get<Root>(this.apiUrl);

  }
}
