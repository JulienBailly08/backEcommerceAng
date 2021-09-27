import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;
  productSub: Subscription | undefined;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.productSub = this.productService.getProducts().subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      })
  }

}
