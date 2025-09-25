import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../../data/dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  public readonly userId = input.required<string>();
  public readonly userName = input.required<string>();

  public tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId());
  }

  public onCompletedTaskId(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
