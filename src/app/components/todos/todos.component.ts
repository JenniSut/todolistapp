import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!:Todo[];


  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos =>{
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    //detele from UI
    this.todos = this.todos.filter(t => t.id !== todo.id)//filtteröidään muut todoitemit, kuin ko. id:n omaava
    //delete from server
    this.todoService.deleteTodo(todo).subscribe();

  }

  addTodo(todo:Todo) {
    //ensin lisätään serverille, ja kun sieltä saadaa response, lisätään item UI:hin
    this.todoService.addTodo(todo).subscribe(todo  => {
      this.todos.push(todo)
    })
  }


}
