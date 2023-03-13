import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { PostTypeEnum } from 'src/app/enums/post-type-enum';
import { Post } from 'src/app/models/post';
import { PostResponseModel } from 'src/app/models/postResponseModel';
import { Root } from 'src/app/models/root';
import { HelperService } from 'src/app/services/helper.service';
import { PostService } from 'src/app/services/post.service';
import { PostComponent } from '../../post/post/post.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],

})
export class ContentComponent implements OnInit {
  text: string = '';
  posts: Post[] = [];
  dates: any[] = [];
  rootUrl: string = "localhost:4200";
  root: Root;
  postTypeEnum: PostTypeEnum = 0;
  count: number = 0;
  isModalButtonVisible: boolean[] = [false];
  isModalVisible: boolean[] = [false];
  postForm: FormGroup;
  postCount: number;

  postResponseModel: PostResponseModel = {
    data: this.posts,
    message: '',
    success: true,
  };

  constructor(private postService: PostService, private helperService: HelperService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getRoot().subscribe(root => {
      this.root = root;
      this.posts = root.posts;
      this.postCount=root['posts-total'];
      this.helperService.parseAndAssignDates(this.posts);
      this.helperService.categorizePostsByDate(this.posts);
    });
  }

  getRoot(): Observable<Root> {
    return this.helperService.getRawData().pipe(
      map(response => {
        console.log(this.helperService.parseApiStringToJson(response));

        return this.helperService.parseApiStringToJson(response);
      })
    );
  }

  onClickShowModal(i: number) {
    this.isModalVisible[i] = true;
    const modalRef = this.modalService.open(PostComponent, { scrollable: true });
    modalRef.componentInstance.post = this.posts[i];
  }

  categorizePostsByDate(posts: Post[]) {
    // Assign only the first post of each day, set false the rest until the day changes. Repeat for each day. 
    posts.forEach(post => {
      let previousMonth = '',
        previousDay = '';

      if (previousDay === post['day'] && previousMonth === post['month']) {
        post['is-date-visible'] = false;
      } else {
        post['is-date-visible'] = true;
      }

      previousMonth = post['month'];
      previousDay = post['day'];

    })
  };
}
