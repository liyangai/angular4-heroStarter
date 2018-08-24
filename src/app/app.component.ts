import { Component, AfterViewInit, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    public el:ElementRef
  ){

  }
  @ViewChild(MessagesComponent)
  private refMessage:MessagesComponent;


  targetMessage = 'appLog   '
  title = 'Tour of Heroes';
  appLog(mess:string){
    console.log(this.targetMessage + mess);
    
  }
  ngOnInit() {
    // console.log(this.el.nativeElement);
    
  }
}
