import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private myid = 0;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private http: HttpClient) { }

  getToken(): string {
    return this.cookie.get('token');
  }

  clearToken() {
    this.cookie.delete('me', '/');
    this.cookie.delete('token', '/');
  }

  saveToken(token: string): Observable<any> {
    return this.http.get(`${environment.urls.baseUrl}/gateway?code=${token}`);
  }

  isLogin(): boolean {
    return this.cookie.check('token');
  }

  signOut() {
    this.clearToken();
    this.router.navigate(['/welcome']);
  }

  whoami(): string {
    return this.cookie.get('me');
  }

}
