import { Component, OnInit } from '@angular/core';
import { DeliveryData } from 'src/app/models/delivery-data';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  constructor() { }
  deliveryListData:DeliveryData[] = [];
  p: number = 1;

  ngOnInit(): void {
    this.deliveryListData = [
      {firstName: "William", lastName: 'Shakespeare', address: "England", wishes: 'Books'},
      {firstName: "JRR", lastName: 'Tolkein', address: "England", wishes: 'Pen'},
      {firstName: "Charles", lastName: 'Dickens', address: "US", wishes: 'Teddy bear'},
      {firstName: "Agatha", lastName: 'Cristie', address: "India", wishes: 'Knife'},
      {firstName: "Jk", lastName: 'Rowling', address: "Africa", wishes: 'Hat'},
      {firstName: "William", lastName: 'Shakespeare', address: "England", wishes: 'Books'},
      {firstName: "George ", lastName: 'Orwell', address: "England", wishes: 'Pen'},
      {firstName: "Rabindranath ", lastName: 'Tagore', address: "US", wishes: 'Teddy bear'},
      {firstName: "Chetan ", lastName: 'Bhagat', address: "India", wishes: 'Knife'},
      {firstName: "Jk", lastName: 'Rowling', address: "Africa", wishes: 'Hat'},
      {firstName: "Virginia ", lastName: 'Woolf', address: "England", wishes: 'Books'},
      {firstName: "JRR", lastName: 'Tolkein', address: "England", wishes: 'Pen'},
      {firstName: "Ruskin ", lastName: 'Bond', address: "US", wishes: 'Teddy bear'},
      {firstName: "Agatha", lastName: 'Cristie', address: "India", wishes: 'Knife'},
      {firstName: "Ernest ", lastName: 'Hemingway', address: "Africa", wishes: 'Hat'},
    ]
  }

}
