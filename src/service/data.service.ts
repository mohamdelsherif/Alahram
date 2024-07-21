import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

// const Base_Url = 'http://ue-dt.somee.com/api/Cows/GetBarns?pageNumber=1&pageSize=5';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    private apiUrl = 'http://ue-dt.somee.com/api/Cows/GetBarns?pageNumber=1&pageSize=5';  // Replace with your API URL

    constructor(private http: HttpClient) { }
  
    getData(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
}