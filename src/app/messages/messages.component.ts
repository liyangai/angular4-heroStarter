import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  constructor(public messageService:MessageService) { }
  
  @Input() appLog: any
  @Input() parent:any
  ngOnInit() {
    this.appLog('detail')
    this.parent.appLog('detail')
    console.log(this.parent.el.nativeElement);
    
  }
  log(mess:string){
  
    
  }

}
