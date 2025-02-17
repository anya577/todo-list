import { Component, model, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Task { 
  id: number;
  text: string;
} 

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  tasks = signal<Task[]>([]);
  taskText = model('');


  addTask() { 
    this.tasks.update(tasks => [
      ...tasks,
      { id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, text:this.taskText() }
    ]);
    this.taskText.set('');
  }
    
 
  removeTask(index: number) { 
    this.tasks.update(tasks => { 
      tasks.splice(index, 1)
      return tasks
    })
  }
}
