import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FileUploadService } from 'src/app/services/file-upload.service';
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
  progress=0;

  constructor(
    private productService : ProductsService,
    private fileService : FileUploadService
    ) { }

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

  onFinnish(event:any){
    console.log(event);
    if(event.product){
      if(this.selectedProduct){//edition du produit car selectedProduct existe

      }
      else{//creation produit
        this.productService.addProduct(event.product).subscribe(
          (data)=>{
            if(data.status ==200){
                console.log(data);
                if (event.image){
                  this.fileService.uploadImage(event.image).subscribe(
                    (event: HttpEvent<any>)=>{
                      switch (event.type) {
                        case HttpEventType.Sent:
                          console.log('requete envoyée avec succès');
                          break;

                          case HttpEventType.UploadProgress:
                          this.progress = Math.round(event.loaded /*/ event.total *100*/); // Problème d'existance d'un objet potentiellement null
                          break;

                          case HttpEventType.Response:
                          console.log(event.body);
                          break;
                      }
                    }
                  );
                }
                event.product.idProduct = data.args.lastInsertId; // recupération de l'id du produit créer via le retour du service
                this.products.push(event.product); // ajout de l'objet dans le tableau des elements
            }
          }
        );
      }
    }
    this.productModalOpen = false;
  }

}
