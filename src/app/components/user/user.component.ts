import { Component, computed, EventEmitter, input, output } from "@angular/core";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public readonly id = input.required<string>();
  public readonly name = input.required<string>();
  public readonly avatar = input.required<string>();
  public readonly select = output<string>();
  public readonly imagePath = computed(
    () => 'assets/users/' + this.avatar()
  );

  public onSelectUser() {
    this.select.emit(this.id());
  }
}
