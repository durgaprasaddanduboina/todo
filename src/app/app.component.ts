import { Component,OnInit } from '@angular/core';
import { Subject, Observer, Observable, Subscription, from } from 'rxjs';
import { TodosService } from './todos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserformComponent } from './userform/userform.component';
import { takeUntil } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simpletodo';
  usersArr:any;
  
  constructor(private todos:TodosService) { }

  ngOnInit() {
   this.listUsers();
  }
  listUsers():void{
    this.todos.getEmployees().subscribe((res)=>{
      this.usersArr=res;
      console.log(this.usersArr);
    });
  }
  
}
