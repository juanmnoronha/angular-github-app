interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'g01nF11Z4XhPPgjn2tmtBvaX0KVZicvF',
  domain: 'juanmnoronha.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
