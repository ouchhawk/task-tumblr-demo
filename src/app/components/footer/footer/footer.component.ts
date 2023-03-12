import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  isFooterModalVisible: boolean = true;
  registerUrl: string =
    'https://www.tumblr.com/register/follow/demo?referer=follow_iframe_small_center&source=blognetwork_follow_iframe';
  loginUrl: string =
    'https://www.tumblr.com/login?referer=follow_iframe_small_center';

  onClickCloseButton() {
    this.isFooterModalVisible = false;
  }
  onClickLoginButton() {
    window.open(this.loginUrl, '_blank');
  }
  onClickRegisterButton() {
    window.open(this.registerUrl, '_blank');
  }
}