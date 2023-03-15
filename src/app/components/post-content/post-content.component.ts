import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post';
@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent {
  @Input() post: Post;

  isModalVisible: boolean = false;

  constructor(private modalService: NgbModal) { }

  onClickShowModal() {
      const modalRef = this.modalService.open(PostContentComponent, { scrollable: true });
      modalRef.componentInstance.post = this.post;
  }

  changeCurrentPostClass(post:Post){
    return post===this.post ? " inactive" : "";
  }
}
