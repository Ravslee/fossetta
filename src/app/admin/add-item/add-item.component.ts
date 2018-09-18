import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import {ProductService} from '../../providers/product.service'
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
   public url = '';
   public url2 = '';
   public url3 = '';
   public url4 = '';
   public product:any;


  constructor(public productService:ProductService) {
    this.product = new Product();
   }

  ngOnInit() {
  }


  public addProduct(){
    this.productService
    .addProduct(this.product);
  }


  onSelectFile1(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }

      
      this.productService
      .uploadFile(event)
      .then((path)=>{
        path.subscribe((res)=>{
          console.dir(res)
          this.product.primaryImage = res;
          this.product.images.push(res);

        })
      })
    
    }
  }
  onSelectFile2(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url2 = event.target.result;
      }
      this.productService
      .uploadFile(event)
      .then((path)=>{
        path.subscribe((res)=>{
          console.dir(res)
          this.product.images.push(res);

        })
      })
    }
  }
  onSelectFile3(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url3 = event.target.result;
      }
      this.productService
      .uploadFile(event)
      .then((path)=>{
        path.subscribe((res)=>{
          console.dir(res)
          this.product.images.push(res);

        })
      })
    }
  }
  onSelectFile4(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url4 = event.target.result;
      }
      this.productService
      .uploadFile(event)
      .then((path)=>{
        path.subscribe((res)=>{
          console.dir(res)
          this.product.images.push(res);

        })
      })
    }
  }
}
