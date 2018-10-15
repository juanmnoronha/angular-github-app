import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  public getRepos(login: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${login}/repos`);
  }
}
