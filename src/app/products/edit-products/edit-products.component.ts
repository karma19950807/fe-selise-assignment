import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductsModel } from '../products.model';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css'],
})
export class EditProductsComponent implements OnInit {
  userId: any;
  productData: any;
  dataLoaded: boolean = false;
  productModelObj: ProductsModel = new ProductsModel();
  editProductForm: FormGroup = new FormGroup({});
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((row) => {
      this.userId = row.id;
    });

    if (this.userId !== '') {
      //View user details
      this.productService
        .viewProduct(this.userId)
        .toPromise()
        .then((data) => {
          this.productData = data;
          //Object.assign(this.productData, data);
          console.log(this.productData);
          //Build the edit form
          this.editProductForm = this.formBuilder.group({
            tracking_no: new FormControl(this.productData.tracking_no),
            place_of_booking: new FormControl(
              this.productData.place_of_booking
            ),
            pobox_no: new FormControl(this.productData.pobox_no),
            to: new FormControl(this.productData.to),
            from: new FormControl(this.productData.from),
            weight: new FormControl(this.productData.weight),
            amount: new FormControl(this.productData.amount),
            datetime: new FormControl(this.productData.datetime),
          });
          this.dataLoaded = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  editProduct() {
    this.productService
      .editProduct(this.userId, this.editProductForm.value)
      .subscribe(
        (data) => {
          this._snackbar.open('The product was successfully updated');
          this.editProductForm.reset();
        },
        (err) => {
          this._snackbar.open('Unable to update the product');
        }
      );
  }
}
