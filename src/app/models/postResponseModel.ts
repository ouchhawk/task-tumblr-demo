import { Post } from './post';
import { ResponseModel } from './responseModel';

export interface PostResponseModel extends ResponseModel {
  data: Post[];
}
