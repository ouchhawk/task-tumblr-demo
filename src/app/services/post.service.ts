import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Root } from '../models/root';
import { PostTypeEnum } from '../enums/post-type-enum';
import { FormGroup } from '@angular/forms';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient, private helperService: HelperService) { }
  posts: Post[] = [];
  root: Root;
}





