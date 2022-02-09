import { Component, OnInit, ChangeDetectorRef, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA,MatDialogRef,MatDialog } from '@angular/material/dialog';
import { TranslationService } from 'angular-l10n';


@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent implements OnInit ,OnDestroy{
 subscriptions: Subscription[] = [];

  constructor(protected cd: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    protected translation: TranslationService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ConfirmdialogComponent>) {
  }
  ngOnInit(): void {
    this.subscriptions.push(
      this.translation.translationChanged().subscribe(() => this.cd.detectChanges()));
  }
  Save(val:any){
    this.dialogRef.close(val);
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscriptionLocal => {
      subscriptionLocal.unsubscribe();
    });
  }
}
