import { Component, OnInit,Inject, ChangeDetectorRef, OnDestroy  } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  MAT_DIALOG_DATA, MatDialogRef, MatDialog  } from '@angular/material/dialog';
import { User } from 'src/user.model';



@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user:User;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
     private dialog: MatDialog,
     public dialogRef: MatDialogRef<UserformComponent>) {
      this.user=data.user;
      if(this.data.type=='createform'){
         this.user={
          id: null,
        name: null,
        username:null,
        email:null
                  }
      }
     }

  ngOnInit(): void {
    console.log('this is reached');
  }
  onSubmit(userForm:NgForm){
    let val=userForm.value;
    val={...val,id:this.user.id}
    this.dialogRef.close(val);
    //console.log(userForm.value);
    
    
  }

}
