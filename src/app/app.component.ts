import { Component } from '@angular/core';
import { QuotesService } from './services/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(private quotesService: QuotesService) {}

  onQuoteCreated(quote) {
    console.log('quote retrieved', quote);
    let addedQuote = this.quotesService.saveQuote({
      firstname: quote.value.firstname,
      lastname: quote.value.lastname,
      email: quote.value.email,
      telephone: quote.value.telephone,
      //text: quote.value.firstname
    });
    console.log('addedQuote', addedQuote);
  }

  onQuoteUpdated(quote) {
    console.log('quote depuis la méthode onQuoteUpdate() du parent app.component.html', quote);
    this.quotesService.updateQuote({ firstname: quote.value.firstname, lastname: quote.value.lastname, email: quote.value.email, telephone: quote.value.telephone, key: quote.value.key});
  }

  ngOnInit(){}
}
