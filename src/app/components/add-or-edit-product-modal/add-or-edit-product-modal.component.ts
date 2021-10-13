import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-or-edit-product-modal',
  templateUrl: './add-or-edit-product-modal.component.html',
  styleUrls: ['./add-or-edit-product-modal.component.css']
})
export class AddOrEditProductModalComponent implements OnInit {

  @Input() product!:Product;
  productForm !: FormGroup;

  constructor(private formBuilder:FormBuilder) {
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

  ngOnInit(): void {
  }

}
