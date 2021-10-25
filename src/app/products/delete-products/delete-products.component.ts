import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css'],
})
export class DeleteProductsComponent implements OnInit {
  userId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.deleteProduct();
  }

  deleteProduct() {
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data.id;
    });

    this.productService.deleteProduct(this.userId).subscribe(
      (res) => {
        this._snackbar.open('Product was deleted successfully');
        this.router.navigate(['http://localhost:4200/products/list']);
      },
      (err) => {
        this._snackbar.open('Unable to delete the product');
      }
    );
  }
}
