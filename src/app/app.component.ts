import { Component, OnInit, signal } from '@angular/core';
import { User, UserService } from './services/user/user.service';
import { UserCardComponent } from './components/user-card/user-card.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  public readonly users = signal<User[]>([]);
  public readonly selectedUserId = signal<string>('');

  constructor(protected userService: UserService) {}

  public ngOnInit(): void {
    const users = this.userService.getUser()
    this.users.set(users)
  }

  public onSelectedUser(id: string) {
    this.selectedUserId.set(id);
  }

  public get selectedUser() {
    return this.users().find(user => user.id === this.selectedUserId());
  }
}
