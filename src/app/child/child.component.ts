import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() updateDataEvent = new EventEmitter<string>();

  sendDataToParent() {
    const dataToSend = 'Data from child component';
    this.updateDataEvent.emit(dataToSend);
  }


  constructor() { }

  ngOnInit(): void {
  }

  

}
