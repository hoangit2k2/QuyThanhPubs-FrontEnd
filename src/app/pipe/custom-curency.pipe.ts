import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'customCurrency'
  })
export class CustomCurrencyPipe implements PipeTransform{
    transform(value: number, currencyCode: string = 'USD') {
         // Perform any custom formatting or logic here
    // For simplicity, let's assume we want to display the currency symbol before the value
    const currencySymbols: any = {
        USD: '$',
        EUR: '€',
        GBP: '£',
        // Add more currency symbols as needed
      };
  
      const symbol = currencySymbols[currencyCode] || '';
  
      return symbol + value.toFixed(2); 
    }
}