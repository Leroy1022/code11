import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Sort} from '@angular/material/sort';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'column';desserts: Dessert[] = [
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
  ]
  
  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;
  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do']
  
  constructor(public dialog: MatDialog) {
   }

  openTempDialog() {
    const myCompDialog = this.dialog.open(this.dialogRef, { data: this.myFooList,panelClass: 'fullscreen-dialog',
    height: '33%',
    width: '30%', position:{
      left :'50px',
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