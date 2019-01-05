# @nowzoo/ngx-message

A service and component for displaying app messages.

[Demo](https://nowzoo.github.io/ngx-message/)
|
[Demo Source Code](https://github.com/nowzoo/ngx-message/tree/master/projects/ngx-message-demo/src/app)

[Documentation](https://nowzoo.github.io/ngx-message/docs/)



## Quick start

```bash
npm i @nowzoo/ngx-message save
```

Import the module...
```typescript
import { NgxMessageModule } from '@nowzoo/ngx-message';
@NgModule({
  imports: [
    NgxMessageModule.forRoot()
  ],
})
export class AppModule { }
```

Insert the component at a high level in your app...

```html
<!-- app.component.html -->
<router-outlet></router-outlet>
<ngx-message></ngx-message>
```

Use the service to display messages...
```typescript
import { NgxMessageService } from '@nowzoo/ngx-message';

export class MyComponent {

  constructor(
    private msgService: NgxMessageService
  ) { }

  showSuccess() {
    this.msgService.success('Hey, you are great!')
  }

  showWarning() {
    this.msgService.warn('Woops!')
  }

  showWait() {
    this.msgService.wait('Waiting...')
  }

}

```

## Contributing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

`git clone https://github.com/nowzoo/ngx-message.git`

The library code is in `projects/ngx-message`.

The demo is in `projects/ngx-message-demo`

Build the library: `ng build ngx-message`

Serve the demo locally:  `ng serve ngx-message-demo`



### Unit tests

Run `ng test ngx-message` to execute the unit tests via [Karma](https://karma-runner.github.io).

The library tests can also be run with Wallaby. Select the wallaby.js file in `projects/ngx-message`;
