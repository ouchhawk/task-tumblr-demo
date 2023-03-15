import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post';
import { Root } from 'src/app/models/root';
import { HelperService } from 'src/app/services/helper.service';
import { PostService } from 'src/app/services/post.service';
import { PostContentComponent } from '../post-content/post-content.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() postIndex: number;

  isArrowButtonVisible: boolean[] = [false];
  dateDMYFormat: string;
  posts: Post[] = [];
  isSinglePost: boolean = false;
  postCount: number;
  root: Root;
  currentPost: Post;

  constructor(private postService: PostService, private helperService: HelperService, private modalService: NgbModal, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.getRoot().subscribe(root => {
      this.root = root;
      this.posts = this.root.posts;
      this.addPostsDMYFormat(this.posts);
      this.postCount = root['posts-total'];
      this.helperService.parseAndAssignDates(this.posts);
      this.helperService.categorizePostsByDate(this.posts);

      this.activatedRoute.params.subscribe(params => {
        if (params["id"]) {
          this.posts = [this.root.posts[params["id"]]];
        }
        else {
          this.posts = JSON.parse(JSON.stringify(this.root.posts));
        }
      })
    })
  }

  addPostsDMYFormat(posts: Post[]) {
    posts.forEach(post => {
      post.dateDMYFormat = this.helperService.formatDateDMY(post['date-gmt']);
    })
  };

  setCurrentPost(id: string) {
    const currentPost = this.root.posts.filter(post => post.id === id)[0];
    this.posts = [currentPost];
    this.currentPost = currentPost;
  }

  onClickShowModal(id: string) {
    const post = this.root.posts.filter(post => post.id === id)[0]
    const modalRef = this.modalService.open(PostContentComponent, { scrollable: true });
    modalRef.componentInstance.post = post;
  }
}
