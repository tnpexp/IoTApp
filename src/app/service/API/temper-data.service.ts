import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from './../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemperDataService {

  constructor(private http: Http) { }

  addData(data) {
    return this.http.post(api.url + '/api/temper/add', data).pipe(map(res => res.json()));
  }

  removeData(key) {
    return this.http.delete(api.url + '/api/temper/remove/' + key).pipe(map(res => res.json()));
  }

  addDataform(data) {
    return this.http.post(api.url + '/api/temper/addform', data).pipe(map(res => res.json()));
  }

  showData() {
    return this.http.get(api.url + '/api/temper/show').pipe(map(res => res.json()));
  }

  editData(key, data) {
    return this.http.post(api.url + '/api/temper/edit/' + key, data).pipe(map(res => res.json()));
  }
  getDataByKey(key) {
    return this.http.get(api.url + '/api/temper/show/' + key).pipe(map(res => res.json()));
  }
}
