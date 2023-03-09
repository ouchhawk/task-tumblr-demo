import { Component, OnInit } from '@angular/core';
import { PostTypeEnum } from 'src/app/enums/post-type-enum';
import { Post } from 'src/app/models/post';
import { PostResponseModel } from 'src/app/models/postResponseModel';
import { Root } from 'src/app/models/root';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  text: string = '';
  posts: Post[] = [];
  dates: any[] = [];
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
      const selectedString = response.substring(startIndex, endIndex);

      this.root = JSON.parse(selectedString);
      this.posts = this.root.posts;

      const weekdayStartIndex = 0;
      const weekdayEndIndex = 3;
      const dayStartIndex = 5;
      const dayEndIndex = 7;
      const monthStartIndex = 8;
      const monthEndIndex = 11;
      this.posts.forEach((post) => {
        const weekday = post['date']
          .substring(weekdayStartIndex, weekdayEndIndex)
          .toUpperCase();
        post['weekday'] = weekday;
        const day = post['date']
          .substring(dayStartIndex, dayEndIndex)
          .toUpperCase();
        post['day'] = day;
        const month = post['date']
          .substring(monthStartIndex, monthEndIndex)
          .toUpperCase();
        post['month'] = month;
      });

      let previousMonth = '',
        previousDay = '';
      this.posts.forEach((post) => {
        if (previousDay === post['day'] && previousMonth === post['month']) {
          post['is-date-visible'] = false;
        } else {
          post['is-date-visible'] = true;
        }
        previousMonth = post['month'];
        previousDay = post['day'];
      });

      let previousPost: Post;
      for (let post of this.posts) {
        console.log(post);
      }
    });
  }

  parseDate() {}
}
