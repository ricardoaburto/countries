import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchByCapital(term: string){
console.log(term);
  }

}
