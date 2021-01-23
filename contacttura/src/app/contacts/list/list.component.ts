import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 collection = {count: 60, data: []};
 config = {
   itemsperPage: 10,
   currentPage: 1,
   totalItems: this.collection.count
 };
 public maxSize: number = 7;
 public directionsLinks: boolean = true;
 public responsive: boolean = true;
 public labels: any = {
previousLabel: 'Anterior',
nextLabel: 'Próximo'};
  constructor() { }

  ngOnInit(): void {
    this.populateElements();
  }

  populateElements(){
    for(let i = 0; i < this.collection.count; i++){
      this.collection.data.push({
        nome: 'teste' + i,
        email: 'email' + i + '@contacttura.com',
        fone: '(' + 0 + 1 + ')' + i + i + i + i + i + '-' + i + i + i + i
      });
    }
  }
}
