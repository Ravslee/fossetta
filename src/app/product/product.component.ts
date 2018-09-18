import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product'
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { ProductService } from '../providers/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public quantity: number;
 
  public product:any;
  public id:string;

  constructor(public route:ActivatedRoute, public productService:ProductService) {
  
  
    
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      console.log(this.id)
     this.product = this.productService.getProductById(this.id);
    })
  }

  public addQuantity() {
    this.quantity = this.quantity + 1;
  }
  public deleteQuantity() {
    if (this.quantity > 1)
      this.quantity = this.quantity - 1;
  }
}
