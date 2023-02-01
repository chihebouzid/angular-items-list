import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private itemsUrl = 'assets/MOCK_DATA.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get(this.itemsUrl);
  }
}
