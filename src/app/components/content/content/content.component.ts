import { Component, OnInit } from '@angular/core';
import { Root } from 'src/app/models/root';
import { HelperService } from 'src/app/services/helper.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],

})
export class ContentComponent implements OnInit {
  root: Root;

  constructor(private postService: PostService, private helperService: HelperService) { }

  ngOnInit(): void {
    this.postService.getRoot().subscribe(root => {
      this.root = root;
    })
  }
}
