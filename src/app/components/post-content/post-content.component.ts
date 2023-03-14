import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post';
import { HelperService } from 'src/app/services/helper.service';
import { PostService } from 'src/app/services/post.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent {
  @Input() post: Post;

  isModalVisible: boolean = false;
  isArrowButtonVisible: boolean[] = [false];

  constructor(private postService: PostService, private helperService: HelperService, private modalService: NgbModal) { }

  onClickShowModal() {
      const modalRef = this.modalService.open(PostContentComponent, { scrollable: true });
      modalRef.componentInstance.post = this.post;
  }

  changeCurrentPostClass(post:Post){
    if(post==this.post){
      return " inactive"
    }
    else
    {
      return ""
    }
  }
}
