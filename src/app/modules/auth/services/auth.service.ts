import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public sendCredentials(email: string, password: string) {
    console.log('Sending credentials...', email, password);
  }
}
