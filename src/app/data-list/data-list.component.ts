import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() dataList: User[] = [];
  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  onSelectClicked(user: User): void {
    this.selectClick.emit(user);
  }
  onUpdateClicked(user: User): void {
    this.updateClick.emit(user);
  }
  onDeleteClicked(user: User): void {
    this.deleteClick.emit(user);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
