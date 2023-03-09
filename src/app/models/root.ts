import { Post } from './post';
import { Tumblelog } from './tumblelog';

export interface Root {
  tumblelog: Tumblelog;
  'posts-start': number;
  'posts-total': number;
  'posts-type': boolean;
  posts: Post[];
}
