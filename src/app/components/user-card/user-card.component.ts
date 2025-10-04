import { User } from './../../services/user/user.service';
import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  public readonly user = input.required<User>();
  public readonly selected = input<boolean>(false);
  public readonly onSelect = output<string>();
  public readonly imagePath = computed(
    () => 'assets/users/' + this.user().avatar
  );

  public selectUser() {
    this.onSelect.emit(this.user().id);
  }
}
