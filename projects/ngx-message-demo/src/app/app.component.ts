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
    this.service.wait('Waiting ....');
    setTimeout(() => {
      this.service.hide();
    }, 3000);
  }

  showSuccess() {
    this.service.success('Success!');
  }

  showWarn() {
    this.service.warn('Woops!');
  }
}
