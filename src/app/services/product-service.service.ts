import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { FileHandle } from '../interfaces/File-handle.model'
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService implements OnInit {
  watches: Products[] = [];

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {
    this.getProducts();
  }
  ngOnInit(): void {
  }

  addProduct(product: FormData) {
    return this.httpClient.post<Products>("http://localhost:8080/addNewProduct", product);
  }

  removeProduct(id: any) {
    return this.httpClient.delete<Products>("http://localhost:8080/deleteProduct/" + id)
  }

  getProducts() {
    this.httpClient.get<Products[]>("http://localhost:8080/getAllProducts").pipe(
      map((x: Products[], i) => x.map((product: Products) => this.createImages(product)))
    )
      .subscribe((response: Products[]) => {
        this.watches = response;
      }
        ,
        (error: HttpErrorResponse) => console.log(error));;
  }

  createImages(product: Products): any {
    const productImages: any = product.productImages;
    if (!productImages || !productImages.picByte || !productImages.type || !productImages.name) {
           throw new Error('Invalid image data');
        }
    const imageBlob = this.dataURItoBlob(productImages.picByte, productImages.type);
    const imageFile = new File([imageBlob], productImages.name, { type: productImages.type });
    const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile));
    const finalFileHandle: FileHandle = {
      file: imageFile,
      url: url
    };

    const productImagesToFileHandle = finalFileHandle;
    product.productImages = productImagesToFileHandle;
    return product;
  }
  


  dataURItoBlob(picBytes: string, imageType: string) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: imageType });
    return blob;
  }
  
  findByModel(property: string) {
    const lowerCaseProperty = property.toLowerCase();
    let foundWatch = this.watches.filter(watch => watch.model.toLowerCase() === lowerCaseProperty);
    if (foundWatch.length > 0)
      return foundWatch[0];
    else
      return {};
  }
}
