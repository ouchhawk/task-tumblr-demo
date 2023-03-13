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
  dateDMYFormat: string;

  constructor(private postService: PostService, private helperService: HelperService) { }

  ngOnInit(): void {
    this.dateDMYFormat = this.formatDateDMY(this.post['date-gmt']);
  }

  formatDateDMY(date: string) {
    const spaceIndex = date.indexOf(' ');
    const selectedString = date.substring(0, spaceIndex);
    const parsedDate = selectedString.split("-", 3);
    let formattedDate: string = '(' + parsedDate[2] + '/' + parsedDate[1] + '/' + parsedDate[0] + ')';
    return formattedDate;
  }
}

