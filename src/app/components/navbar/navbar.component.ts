import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  followUrl:string="https://www.tumblr.com/register/follow/demo?referer=follow_header&source=blognetwork_follow_header";
  exploreUrl:string="https://www.tumblr.com/explore/today";

  constructor(private postService: PostService, private helperService: HelperService) {}

  onClickFollowButton() {
    window.open(this.followUrl, '_blank');
  }
  onClickExploreButton() {
    window.open(this.exploreUrl, '_blank');
  }
}
