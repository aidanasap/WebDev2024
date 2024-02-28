import { Component,Input,Output,EventEmitter } from '@angular/core';
import { products,Product } from '../products';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.css']
})
export class AppItemComponent {
  products = products;
@Input() selectedProduct:string | undefined;

like(products:Product){
products.likes+=1;
}
remove(product:Product){
for(let i=0; i<products.length; i++){
  if(products[i]==product){
    delete products[i];
    break;
  }
}
}

  share(link:string|URL|undefined) {
    window.open("https://t.me/+bX-kLs47TXVkZThi/" + link,'menubar=off, toolbar=off');
  }
  kaspi(a:string|URL|undefined) {
    window.open("https://kaspi.kz/shop/c/smartphones/"+a);
  }
 
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}