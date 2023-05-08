import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
interface Location {
  value: string;
  viewValue: string;
}
interface Building {
  value: string;
  viewValue: string;
}
interface provider {
  value: string;
  viewValue: string;
}
interface Account {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-material-dialog-app';
  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;
  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do']
  constructor(public dialog: MatDialog) { }

    
  locations: Location[] = [
    {value: 'Manhattan0', viewValue: 'manhattan'},
    {value: 'broklyn1', viewValue: ' Broklyn'},
    {value: 'Philly1', viewValue: 'Philly'},
  ];
  buildings: Building[] = [
    {value: 'Empire0', viewValue: 'Empire State Building'},
    {value: 'Statue1', viewValue: ' Statue of Liberty'},
    {value: 'AT&T', viewValue: 'AT&T Building'},
  ];
  Providers: provider[] = [
    {value: 'Empire0', viewValue: 'Empire State Building'},
    {value: 'Statue1', viewValue: ' Statue of Liberty'},
    {value: 'AT&T', viewValue: 'AT&T Building'},
  ];
  accounts: Account[] = [
    {value: 'A0', viewValue: '49-4202-3200-0000-8'},
    {value: 'A1', viewValue: '49-4202-3200-0000-9'},
    {value: 'A2', viewValue: '49-4202-3200-0000-10'},
  ];

  openTempDialog() {
    const myCompDialog = this.dialog.open(this.dialogRef, { data: this.myFooList,panelClass: 'fullscreen-dialog',
    height: '80vh',
    width: '150%', position:{
      left :'20px',
      top : '10px' 
    } });
    myCompDialog.afterOpened().subscribe((res) => {
      // Trigger After Dialog Opened
      console.log('After Opened', { res });
    });
    myCompDialog.beforeClosed().subscribe((res) => {
      // Trigger Before Dialog Closed
      console.log('Before Closed', { res });
    });
    myCompDialog.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed
      console.log('After Closed', { res });
    });
  }
}