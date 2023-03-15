import { Component, OnInit } from '@angular/core';
import { Root } from 'src/app/models/root';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],

})
export class ContainerComponent implements OnInit {
  root: Root;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getRoot().subscribe(root => {
      this.root = root;
    })
  }
}
