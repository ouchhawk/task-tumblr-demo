import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }


  apiUrl = "/api/read/json";


  getPosts(): Observable<any>{
    return this.httpClient
    .get<any>(this.apiUrl);

  }
}
