import { Component, input, output } from '@angular/core';

type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  public readonly onCompletedTask = output<string>()
  public task = input.required<Task>();
  public complete() {
    this.onCompletedTask.emit(this.task().id);
  }
}
