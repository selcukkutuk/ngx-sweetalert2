import { Component } from '@angular/core';
import { SweetAlertService } from '../../../index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SweetAlertService]
})
export class AppComponent {
  constructor(private _swal: SweetAlertService) { }

  showAlert() {
    this._swal.info({ title: 'Hi ;)' });
  }
}
