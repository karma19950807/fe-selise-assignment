import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  productData: any;
  userId: number;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.viewProduct();
  }

  viewProduct() {
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data.id;
    });

    this.productService.viewProduct(this.userId).subscribe((res) => {
      this.productData = res;
    });
  }
}
