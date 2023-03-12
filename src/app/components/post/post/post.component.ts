import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { HelperService } from 'src/app/services/helper.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() index: number;
  @Input() post: Post;

  isModalVisible: boolean = true;

  constructor(private postService: PostService, private helperService: HelperService) {}
}

