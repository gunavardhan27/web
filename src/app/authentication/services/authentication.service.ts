import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string) {
    return this.http.post('http://localhost:3900/api/login', { username, password });
  }
  registerUser(username: string, password: string) {
    return this.http.post('http://localhost:3900/api/addUser', { username, password })
  }
  logoutUser() {
    localStorage.removeItem('token')
    return 'user logged out'
  }
}
