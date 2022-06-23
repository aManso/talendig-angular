import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit{
  public edad = 30;
  @Input('colorMenu') color:string = 'red';
  @ViewChild(NgModel) inputColor: NgModel;


  public constructor(
  ) {
  }

  public ngOnInit(): void {
    console.log(this.inputColor);
  }

  public ngAfterViewInit(): void {
    console.log(this.inputColor);
  }

}