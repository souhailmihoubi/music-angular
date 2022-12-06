import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'Souhail', password: '123', roles: ['USER'] },
  ];

  public loggedUser!: string;

  public isloggedIn: Boolean = false;

  public role!: string[];

  constructor(private router: Router) {}

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.role = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      console.log(curUser);
      if (
        user.username == curUser.username &&
        user.password == curUser.password
      ) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.role = curUser.roles;
        console.log(this.role);
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.role)
      //this.roles== undefiened
      return false;
    return this.role.indexOf('ADMIN') > -1;
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }
  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.role = curUser.roles;
      }
    });
  }
}
