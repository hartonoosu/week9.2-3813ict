import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  // Updated to use capitalized keys
  product = { Id: 0, Name: '', Description: '', Price: 0, Units: 0, Type: '' };

  constructor(private router: Router, private httpClient: HttpClient) {}

  // Function to handle form submission
  addProduct() {
    console.log('Product added:', this.product);

    // Send the new product to the backend API
    this.httpClient.post('http://localhost:3000/products', this.product)
      .subscribe({
        next: (response) => {
          console.log('Product successfully added:', response);
          // Navigate back to products list after adding the product
          this.router.navigate(['/products']);
        },
        error: (error) => {
          console.error('Error adding product:', error);
        }
      });
  }
}
