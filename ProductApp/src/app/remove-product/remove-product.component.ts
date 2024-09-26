import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-remove-product',
  standalone: true,
  imports: [FormsModule], // Include FormsModule to handle the input binding
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent {
  productId: string = '';

  constructor(private http: HttpClient) {}

  removeProduct() {
    if (!this.productId) {
      alert('Please enter a valid Product ID.');
      return;
    }

    this.http.delete(`http://localhost:3000/products/${this.productId}`).subscribe({
      next: () => {
        alert('Product removed successfully!');
        this.productId = ''; // Clear the input after success
      },
      error: (err) => {
        console.error('Error removing product:', err);
        alert('An error occurred while removing the product.');
      }
    });
    
  }
}
