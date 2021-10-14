import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  @Input() products!:Product[];
  productModalOpen = false;
  selectedProduct!:Product;

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
  }

  onEdit(product:Product):void{
    this.productModalOpen=true;
    this.selectedProduct=product;

  }

  onDelete(product:Product):void{

  }

  addProduct():void{
    this.productModalOpen=true;

  }

  onFinnish(product:Product){
    console.log(product);
    if(product){
      if(this.selectedProduct){//edition du produit car selectedProduct existe

      }
      else{//creation produit
        this.productService.addProduct(product).subscribe(
          (data)=>{
            if(data.status ==200){
                console.log(data);
                product.idProduct = data.args.lastInsertId; // recupération de l'id du produit créer via le retour du service
                this.products.push(product); // ajout de l'objet dans le tableau des elements
            }
          }
        );
      }
    }
    this.productModalOpen = false;
  }

}
