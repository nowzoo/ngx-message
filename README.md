# @nowzoo/ngx-message

A service and component for displaying app messages.

## Quick start

```bash
npm i @nowzoo/ngx-message
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




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
