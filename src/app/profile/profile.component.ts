import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth/auth.service';
import { GithubService } from './../github/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  repos: any[];

  constructor(public auth: AuthService, private github: GithubService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.github.getRepos(this.profile.nickname).subscribe(
        data => this.repos = data,
        error => console.log(error)
      )
    } else {
      this.auth.getProfile((error, profile) => {
        this.profile = profile;
        this.github.getRepos(this.profile.nickname).subscribe(
          data => this.repos = data,
          error => console.log(error)
        )
      });
    }
  }

}
