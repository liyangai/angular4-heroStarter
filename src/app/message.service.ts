import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message:string[] = [];
  savedMessage:any = {message:'inital'};
  add(mes:string):void{
    this.message.push(mes);
  }
  clear():void{
    this.message = [];
  }
  changeMes(mes:string){
    this.savedMessage.message = mes
  }
  constructor() { }
}
