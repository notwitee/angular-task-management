import { MOCK_USERS } from './../../../mock-data/mock-users';
import { Injectable } from '@angular/core';

export type User = {
  id: string;
  name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly storageKeys = 'users';
  private users: User[] = [];

  constructor() {
    this.loadUsers();
  }

  private loadUsers() {
    const users = localStorage.getItem(this.storageKeys);

    if (users) {
      this.users = JSON.parse(users);
      return;
    }

    this.users = MOCK_USERS;
    this.saveUsers();
  }

  private saveUsers() {
    localStorage.setItem(this.storageKeys, JSON.stringify(this.users));
  }

  public getUser() {
    return [...this.users];
  }
}
