import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  followUrl:string="https://www.tumblr.com/register/follow/demo?referer=follow_header&source=blognetwork_follow_header";
  exploreUrl:string="https://www.tumblr.com/explore/today";

  onClickFollowButton() {
    window.open(this.followUrl, '_blank');
  }
  onClickExploreButton() {
    window.open(this.exploreUrl, '_blank');
  }
}
