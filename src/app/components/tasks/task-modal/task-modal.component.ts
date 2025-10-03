import { Component, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export type newTask = {
  title: string,
  summary: string,
  dueDate: string
}
@Component({
  standalone: true,
    selector: 'app-task-modal',
    imports: [ReactiveFormsModule],
    templateUrl: './task-modal.component.html',
    styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  public readonly didDismiss = output<void>();
  public readonly onCreate = output<newTask>();
  public readonly form = this.fb.group({
    title: new FormControl('',{ validators: [Validators.required], nonNullable: true }),
    summary: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    dueDate: new FormControl('', { validators: [Validators.required], nonNullable: true })
  })

  constructor(
    protected fb: FormBuilder
  ) {}

  public createTask() {
    this.onCreate.emit(this.form.getRawValue());
  }
}
