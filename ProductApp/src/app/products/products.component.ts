import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Product {
  Id: number;
  Name: string;
  Description: string;
  Type: string;
  Price: number;
  Units: number;
}

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [CommonModule],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private httpClient: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadProducts(); // Load products on component initialization
  }

  loadProducts() {
    this.httpClient.get<Product[]>('http://localhost:3000/products')
      .subscribe({
        next: (data) => {
          console.log('Raw data from API:', data);
          this.products = data;
          this.cdr.detectChanges(); // Manually trigger change detection
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        }
      });
  }
}
