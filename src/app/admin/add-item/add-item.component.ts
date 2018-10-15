import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../providers/product.service'
import { AngularFireStorage } from '@angular/fire/storage';
import { resolve } from 'q';
import { MatSnackBar } from '@angular/material';
import each from 'async/each';
import * as Compress from 'compress.js'

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
  public product: any;
  public filesToUpload = [];
  public localUrls = [];
  public compress: any;
  public uploading = false;

  constructor(public productService: ProductService, public snackBar: MatSnackBar) {
    this.product = new Product();
    this.compress = new Compress()

  }

  ngOnInit() {
  }
  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public addProduct() {

    if (!this.product.name) {
      this.openSnackBar("Please enter item name", "OK")
      return;
    }
    if (!this.product.description) {
      this.openSnackBar("Please enter item description", "OK")
      return;
    }
    if (!this.product.price) {
      this.openSnackBar("Please enter item price", "OK")
      return;
    }
    if (this.filesToUpload.length <= 0) {
      this.openSnackBar("Please attach images", "OK")
      return;
    }

    this.uploading = true;
    this.compress.compress(this.filesToUpload, {
      size: 1, // the max size in MB, defaults to 2MB
      quality: .75, // the quality of the image, max is 1,
      maxWidth: 720, // the max width of the output image, defaults to 1920px
      maxHeight: 1080, // the max height of the output image, defaults to 1920px
      resize: true, // defaults to true, set false if you do not want to resize the image width and height
    })
      .then((data) => {

        console.log(data);

        each(data, (d, callback) => {

          // Perform operation on file here.
          console.log('Processing file ' + d);
          var base64file = d.prefix + d.data;

          fetch(base64file)
            .then((res) => res.blob())
            .then((blob) => {
              var file = new File([blob], d.alt, { type: d.ext })
              return file;
            })
            .then((file) => {
              console.log(file);

              // Do work to process file here
              this.productService
                .uploadFile(file)
                .then((path) => {
                  path.subscribe((res) => {
                    console.dir(res)
                    if (!this.product.primaryImage) {
                      this.product.primaryImage = res;
                    }
                    this.product.images.push(res);
                    callback();
                  })
                })
            })


        }, (err) => {
          // if any of the file processing produced an error, err would equal that error
          if (err) {
            // One of the iterations produced an error.
            // All processing will now stop.
            console.log('A file failed to process');
          } else {
            console.log('All files have been processed successfully');

            this.productService
              .addProduct(this.product)
              .then(res => {
                console.log("Product added successfully!");
                this.openSnackBar("Product added successfully!", ":)")
                this.reset();
              })
          }
        });
      });



  }

  public reset() {
    this.filesToUpload = [];
    this.localUrls = [];
    this.product = new Product();
    this.uploading = false;

  }
  removeImage(index) {
    this.filesToUpload.splice(index, 1);
    console.log(index);

    this.localUrls.splice(index, 1);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      // this.filesToUpload = event.target.files;

      new Promise((resolve, reject) => {

        for (var i = 0; i < event.target.files.length; i++) {
          this.filesToUpload.push(event.target.files[i])
          var reader = new FileReader();
          reader.readAsDataURL(this.filesToUpload[i]); // read file as data url
          reader.onload = (event: any) => { // called once readAsDataURL is completed
            console.log(event.target.result);

            this.localUrls.push(event.target.result)
            if (this.localUrls.length == this.filesToUpload.length) {
              resolve();
            }
          }
        }
      })

      // Promise.all(this.filesToUpload)
      //   .then((file) => {
      //     return new Promise((res, rej) => {
      //       var reader = new FileReader();
      //       reader.readAsDataURL(file[0]); // read file as data url
      //       reader.onload = (event: any) => { // called once readAsDataURL is completed
      //         this.localUrls.push(event.target.result)
      //         console.log(event.target.result);
      //         res();
      //       }
      //     });
      //   })

    }
  }
  onSelectFile2(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url2 = event.target.result;
      }
      this.productService
        .uploadFile(event)
        .then((path) => {
          path.subscribe((res) => {
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

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url3 = event.target.result;
      }
      this.productService
        .uploadFile(event)
        .then((path) => {
          path.subscribe((res) => {
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

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url4 = event.target.result;
      }
      this.productService
        .uploadFile(event)
        .then((path) => {
          path.subscribe((res) => {
            console.dir(res)
            this.product.images.push(res);

          })
        })
    }
  }
}
