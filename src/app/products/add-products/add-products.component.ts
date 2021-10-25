import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ProductsModel } from '../products.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {
  productsModelObj: ProductsModel = new ProductsModel();

  addProductForm: FormGroup = new FormGroup({});

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      tracking_no: ['', [Validators.required], Validators.minLength(13)],
      place_of_booking: ['', [Validators.required]],
      pobox_no: ['', [Validators.required]],
      to: ['', [Validators.required]],
      from: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      datetime: ['', [Validators.required]],
    });
  }

  addProduct() {
    this.productsModelObj.tracking_no = this.addProductForm.value.tracking_no;
    this.productsModelObj.place_of_booking =
      this.addProductForm.value.place_of_booking;
    this.productsModelObj.pobox_no = this.addProductForm.value.pobox_no;
    this.productsModelObj.to = this.addProductForm.value.to;
    this.productsModelObj.from = this.addProductForm.value.from;
    this.productsModelObj.weight = this.addProductForm.value.weight;
    this.productsModelObj.amount = this.addProductForm.value.amount;
    this.productsModelObj.datetime = this.addProductForm.value.datetime;

    this.productService.addProduct(this.productsModelObj).subscribe(
      (res) => {
        console.log(res);
        this._snackBar.open('Successfully added a new product');
        this.addProductForm.reset();
      },
      (err) => {
        this._snackBar.open('Something went wrong');
      }
    );
  }
}
