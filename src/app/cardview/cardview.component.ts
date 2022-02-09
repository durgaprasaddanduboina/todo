import { Component, Input, OnInit } from '@angular/core';
import { Subject, Observer, Observable, Subscription, from } from 'rxjs';
import { TodosService } from './../todos.service';
import { Router, ActivatedRoute } from '@angular/router';

import {  MAT_DIALOG_DATA, MatDialogRef, MatDialog  } from '@angular/material/dialog';
import { UserformComponent } from './../userform/userform.component';
import { takeUntil } from 'rxjs/operators';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';


@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {
@Input() usersArr:any;
private readonly destroyed$ = new Subject<boolean>();
  constructor(private todos:TodosService,
              private dialog: MatDialog,
              private _router:Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  editUser(user:any){
    // this._router.navigate(['edit/:id'],{relativeTo:this._route});
    this.dialog.open(UserformComponent, {
     disableClose: true,
     width: '85%',
     panelClass: 'global-mat-custom-dailog',
     data: {
       // popUpTitle: 'Get Data: ' + this.cmsModuleChange.title,
       popUpTitle: 'Update Form',
       user:user
 
      
     },
     closeOnNavigation: true
   }).afterClosed().pipe(takeUntil(this.destroyed$)).subscribe((event: any) => {
     if(event){
       console.log(event);
       this.todos.update(event).subscribe((res)=>{
         //this.listUsers()
       });
     }
   });
     console.log('this is done')
   }
   deleteUser(user:any){
    this.dialog.open(ConfirmdialogComponent, {
      height: '25%',
      panelClass: 'global-mat-custom-dailog',
      data: 'Are you sure, you want to Delete User data?'
    })
      .afterClosed()
      .subscribe((isOKayflag) => {
        if (isOKayflag) {
          
     this.todos.delete(user).subscribe((res)=>{
      this.usersArr=this.usersArr.filter(res=>res.id!==user.id);
     })
   }
  });
}
   create(){
     this.dialog.open(UserformComponent, {
       disableClose: true,
       width: '85%',
       panelClass: 'global-mat-custom-dailog',
       data: {
         // popUpTitle: 'Get Data: ' + this.cmsModuleChange.title,
         popUpTitle: 'Create Form',
         type:'createform'
        
       },
       closeOnNavigation: true
     }).afterClosed().pipe(takeUntil(this.destroyed$)).subscribe((event: any) => {
       if(event){
         let length=(this.usersArr.length)+1;
         event={...event,id:`${length}`,phone:'111111',website:'www.demo.com'}
       this.todos.create(event).subscribe((res)=>{
         this.usersArr.push(res);
       })
     }
     });
   }

}
