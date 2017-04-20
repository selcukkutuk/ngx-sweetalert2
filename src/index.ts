import { Injectable } from "@angular/core";
// import swalxx from "sweetalert2";

let win : any = typeof window !== 'undefined' && window || {};

@Injectable()
export class SweetAlertService {
  constructor() { }

  // swal(args = {}) {
  //   return swal(args);
  // }

  swal(args = {}){
    return win.Sweetalert2(args);
  }

  prompt(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: "Submit",
      input: "text"
    };
    return this.swal((<any>Object).assign({}, baseOptions, options));
  }

  confirm(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: "Confirm",
      type: "warning"
    };
    return this.swal((<any>Object).assign(baseOptions, options));
  }

  alert(options) {
    const baseOptions = {
      confirmButtonText: "OK",
      type: "info"
    };
    return this.swal((<any>Object).assign(baseOptions, options));
  }

  question(options) {
    return this.alert((<any>Object).assign({ type: "question" }, options));
  }

  success(options) {
    return this.alert((<any>Object).assign({ type: "success" }, options));
  }

  error(options) {
    return this.alert((<any>Object).assign({ type: "error" }, options));
  }

  warning(options) {
    return this.alert((<any>Object).assign({ type: "warning" }, options));
  }

  info(options) {
    return this.alert((<any>Object).assign({ type: "info" }, options));
  }
}