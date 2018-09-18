import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable()
export class ProductService {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  blogsPath="fossetta/connect/products";
  constructor(public db:AngularFirestore, public storage:AngularFireStorage) { }


 

  public addProduct(product:any){
    
    var item = JSON.parse(JSON.stringify(product));
    return this.db.collection(this.blogsPath)
    .add(item)
    .then(res=>{
      console.dir(res.id)
      item.id = res.id;
      this.updateBlog(item);
      console.log("product added successfully!"+res)
    });
  }

   //to updateproducts
   public updateBlog(product:Product){
    this.db
    .collection(this.blogsPath)
    .doc(product.id)
    .update(product)
    .then(res=>{
      console.log("product updated successfully!")
    })
    .catch(e=>{
      console.log(e);
    })

  }


  public getAllProduct(){
    return	 this.db.collection(this.blogsPath).valueChanges();
   }

   public getProductById(productId){
     return this.db.collection(this.blogsPath)
     .doc(productId)
     .valueChanges();
   }

   public uploadFile(event) {
    const file = event.target.files[0];
    const filePath = "fosseta/images/"+ new Date().getMilliseconds();
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    return task.then(res=>{
      console.log("image uploaded!")
       return fileRef.getDownloadURL();
    });


    // // observe percentage changes
    // this.uploadPercent = task.percentageChanges();
    // // get notified when the download URL is available
    // task.snapshotChanges().pipe(
    //     finalize(() => this.downloadURL = fileRef.getDownloadURL() )
    //  )
    // .subscribe()
  }
}
