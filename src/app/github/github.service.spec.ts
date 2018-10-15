import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubService],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    });
  });

  it('should be created', () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service).toBeTruthy();
  });
});
