import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADHD, ASD } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class MlService {
  apiUrl:string='http://127.0.0.1:8000'
  constructor(private http:HttpClient) { }
  getAdhdResponse(data:ADHD){
    return this.http.post(`${this.apiUrl}/predict`,data)
  }
  getAsdResponse(data:ASD){
    return this.http.post(`${this.apiUrl}/predict-asd`,data)
  }
}
