import { Component , OnInit} from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  todo!: string
  

  constructor(public todoServ: TodoService){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    this.todoServ.addTodo(this.todo);
    this.todo = ''
  }
  adTodo(){
    this.onSubmit()
  }
}
