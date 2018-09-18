import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ProductService } from '../providers/product.service';
import { Product } from '../models/product';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  items:any;

  constructor(private router:Router, public productService:ProductService) {
   }

  ngOnInit() {
    this.items = this.productService
    .getAllProduct();
  }


  public showProduct(product:any){
    this.router.navigate(['collection/product/'+product.id]);
  }

 
}
