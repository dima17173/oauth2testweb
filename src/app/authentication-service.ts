import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './add-user/user.model';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/api/';

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('dima:secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    };
    return this.http.post('http://localhost:8080/' + 'oauth/token', loginPayload, {headers});
  }

  getUsers() {
    return this.http.get(this.baseUrl + 'users?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'users/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
}