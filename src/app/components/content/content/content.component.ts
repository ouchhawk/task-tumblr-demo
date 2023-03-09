import { Component, OnInit } from '@angular/core';
import { PostTypeEnum } from 'src/app/enums/post-type-enum';
import { Post } from 'src/app/models/post';
import { PostResponseModel } from 'src/app/models/postResponseModel';
import { Root } from 'src/app/models/root';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  text: string = '';
  posts: Post[] = [];
  root: Root;
  postTypeEnum: PostTypeEnum = 0;

  postResponseModel: PostResponseModel = {
    data: this.posts,
    message: '',
    success: true,
  };

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getRawData().subscribe((response) => {
      const startIndex = response.indexOf('{');
      const endIndex = response.lastIndexOf(';');
      const concatedString = response.substring(startIndex, endIndex);

      this.root = JSON.parse(concatedString);
      this.posts = this.root.posts;

      let day: Date;

      this.posts.forEach((post, index) => {
        post;
      });

      let previousPost: Post;
      for (let post of this.posts) {
        console.log(post);
      }
    });
  }
}
