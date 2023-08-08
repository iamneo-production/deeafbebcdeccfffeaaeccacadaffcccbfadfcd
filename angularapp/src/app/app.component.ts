import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  usd =  { "id":"USD", "value": 1.126735};
  gbp=  { "id":"GBP", "value":0.876893};
  inr=  { "id":"INR", "value":79.677056};

  amount = 0;
  fromCurrency='';
  toCurrency=''; 
  

  getValues(val:any){
    this.amount= val.amount;
    this.fromCurrency=val.fromCurrency;
    this.toCurrency=val.toCurrency;
    
}
}

