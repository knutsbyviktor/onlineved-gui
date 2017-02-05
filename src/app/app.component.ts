import { Component } from '@angular/core';

export class Product {
  id: number;
  name: string;
}

const PRODUCTS: Product[] = [
  { id: 11, name: 'Mahogny' },
  { id: 12, name: 'Fur' },
  { id: 13, name: 'Gran' },
  { id: 14, name: 'Tall' },
  { id: 15, name: 'Alm' },
  { id: 16, name: 'Al' },
  { id: 17, name: 'Bok' },
  { id: 18, name: 'Redwood' },
  { id: 19, name: 'Lövträd' },
  { id: 20, name: 'Björk' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/app.component.css']
})
export class AppComponent {
  title = 'Onlineved';
  products = PRODUCTS;
}
