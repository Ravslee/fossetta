import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../providers/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public products:any;
  constructor(public productService:ProductService) { 
    
  }

  ngOnInit() {
    this.loadProducts();

    this.productService.getAllProduct()
    .subscribe((res)=>{
      console.log("products loadded!");
      console.dir(res);
    })
  }
  public loadProducts(){
   this.products = this.productService
    .getAllProduct();
  }

}
