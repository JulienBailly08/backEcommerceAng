import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories.service';


@Component({
  selector: 'app-add-or-edit-product-modal',
  templateUrl: './add-or-edit-product-modal.component.html',
  styleUrls: ['./add-or-edit-product-modal.component.css']
})
export class AddOrEditProductModalComponent implements OnInit, OnDestroy {

  @Input() product!:Product;
  productForm !: FormGroup;
  categories!: Category[];
  categorySub!: Subscription;
  idCategory = 1;

  constructor(
    private formBuilder:FormBuilder,
    private categoriesServices:CategoriesService
  ) {

    this.productForm = formBuilder.group({
      productInfos: formBuilder.group({
        name:['',Validators.required],
        description:['',Validators.required],
        price:['',Validators.required],
        stock:['', Validators.required]
      }),
      illustration: formBuilder.group({
        image:['',Validators.required]
      })
    })
  }

  selectCategory(id:number){
    this.idCategory=id;
  }

  ngOnInit(): void {
    this.categorySub = this.categoriesServices.getCategories().subscribe(
      (response)=>{
        this.categories = response.result;
      }
    );
  }
  ngOnDestroy(): void {
    this.categorySub.unsubscribe;
  }

}
