import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {
@Input()
public placeholder: string ='';

  @Output() onValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(value: string){
    this.onValue.emit(value)
  }

}
