import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './data/dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";
@Component({
  standalone: true,
    selector: 'app-root',
    imports: [HeaderComponent, UserComponent, TasksComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  public users = DUMMY_USERS;
  public selectedUserId = signal<string>('');

  onSelectedUserId(id: string) {
    this.selectedUserId.set(id);
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId());
  }
}