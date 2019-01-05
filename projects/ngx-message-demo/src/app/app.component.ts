import { Component } from '@angular/core';
import { NgxMessageService } from '@nowzoo/ngx-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-message-demo';
  constructor(
    public service: NgxMessageService
  ) {}

  showWait() {
    this.service.wait('Waiting Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum....');
    // setTimeout(() => {
    //   this.service.hide();
    // }, 3000);
  }

  showSuccess() {
    console.log('sjkshg');
    this.service.success('Success!');
  }

  showWarn() {
    this.service.warn('Woops!');
  }
}
