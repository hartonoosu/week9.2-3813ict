import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ProductsComponent } from './app/products/products.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // <-- This line is crucial to making HTTP requests work
    provideRouter(routes),
  ],
  
}).catch(err => console.error(err));
