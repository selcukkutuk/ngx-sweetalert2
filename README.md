# ngx-sweetalert2
Sweetalert2 for angular x cli application.

# Install
`npm i -s ngx-sweetalert2`

# Usage
Add the following sections to the `.angular.cli.json` file.

```json
"styles": [
"../node_modules/sweetalert2/dist/sweetalert2.css"
],
"scripts": [
"../node_modules/sweetalert2/dist/sweetalert2.js"
],
```

Next, inject `SweetAlertService` into a component or module:
```js
import { SweetAlertService } from 'ngx-sweetalert2';

@Component({
  providers: [SweetAlertService]
})
export class MyComponent {
  constructor(private _swal2: SweetAlertService) {
    this._swal2.success({ title: 'This is a alert' });
  }
}
```

```js
import { SweetAlertService } from 'ngx-sweetalert2';

@NgModule({
  providers: [SweetAlertService]
})
```