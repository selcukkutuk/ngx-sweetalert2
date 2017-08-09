import { Component } from '@angular/core';
import { SweetAlertService } from 'ngx-sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SweetAlertService]
})
export class AppComponent {

  constructor(public _swal: SweetAlertService) {
    this._swal.info({ title: 'Hi ;)' });
  }
}
