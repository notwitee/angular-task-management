import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './data/dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users = DUMMY_USERS;
  // TODO this selectedUser dont have default value so it will make the user interface bug
  public selectedUser = signal<string>('');

  public selectedUserId(id: string): void {
    this.selectedUser.set(id);
  }
  public get selectedUserName() {
    return this.users.find((user) => user.id === this.selectedUser())?.name
  }

}
