import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // FormsModule for handling ngModel

@Component({
  standalone: true,
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  imports: [FormsModule] // FormsModule for ngModel support in forms
})
export class UpdateProductComponent {
  // Define the product object with fields for the form
  product = { id: '', name: '', description: '', price: '', units: '' };

  constructor(private http: HttpClient) {}

  // Function to update the product using the product's id
  updateProduct() {
    const productId = this.product.id;
    this.http.put(`http://localhost:3000/products/${productId}`, this.product)
      .subscribe(response => {
        console.log('Product updated:', response);
      }, error => {
        console.error('Error updating product:', error);
      });
  }
}
