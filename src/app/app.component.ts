import { Component, signal, ViewEncapsulation } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Task { 
  id: number;
  text: string;
} 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  tasks = signal<Task[]>([]);
  taskText = signal('');
  nextId = 1;

  addTask() {
    const text = this.taskText().trim();
    if (!text) return; 

    this.tasks.update(tasks => [...tasks, { id: this.nextId, text }]); 
    this.taskText.set(' ');
  }

  removeTask(index: number) {
    this.tasks.update(tasks => tasks.filter((_, i) => i !== index));
  }
}