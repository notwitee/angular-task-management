import { Component, input, signal } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { newTask, TaskModalComponent } from './task-modal/task-modal.component';

@Component({
  standalone: true,
    selector: 'app-tasks',
    imports: [TaskComponent, TaskModalComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
  public readonly userId = input.required<string>();
  public readonly userName = input.required<string>();
  public readonly addTask = signal<boolean>(false);
  public tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId());
  }

  public onCompletedTaskId(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  public createNewTask(task: newTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId(),
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    });
    this.addTask.set(false);
  }
}
