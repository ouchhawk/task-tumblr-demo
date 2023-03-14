import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Root } from '../models/root';
import { HelperService } from './helper.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient, private helperService: HelperService) { }
  apiUrl = '/api/read/json';

  getRawData(): Observable<any> {
    return this.httpClient.get(this.apiUrl, { responseType: 'text' });
  }

  getRoot(): Observable<Root> {
    return this.getRawData().pipe(
      map(response => {
        return this.helperService.parseApiStringToJson(response);
      })
    );
  }
}





