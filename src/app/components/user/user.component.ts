import { Component, computed, EventEmitter, input, output } from "@angular/core";

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public readonly user = input.required<User>();
  public readonly selected = input<boolean>(false);
  public readonly onSelectUser = output<string>();
  public readonly imagePath = computed(
    () => 'assets/users/' + this.user().avatar  
  );

  public selectUser() {
    this.onSelectUser.emit(this.user().id);
  }
}
