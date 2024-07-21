import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const Base_Url = 'http://192.168.1.120:5107/api/Cows/GetBarns?pageNumber=1&pageSize=5';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  private http = inject(HttpClient);
  constructor() { }
  getPosts(){
    return this.http.get(Base_Url);
  }
}