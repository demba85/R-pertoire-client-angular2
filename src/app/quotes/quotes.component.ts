import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';
import { AngularFireAction, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../authentication/services/auth.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  isAdmin: boolean = false;
  quotes$; //C4EST UN OBSERVABLE qu'on a créer pour pouvoir affiché les données du Bdd

  constructor(private quotesService: QuotesService, private afDb: AngularFireDatabase, private authService: AuthService  ) { }

  ngOnInit() {
   console.log('depuis get quotes:)');
    this.quotes$ = this.quotesService.getQuotes();

    this.authService.user$.subscribe(user => { // Pour permettre a une seule personne de supprimé ou modifier
      console.log('user:', user);
      if(user && user.email === 'demba.sobre@gmail.com') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    })
  }
  
  deleteQuote(quote) {
    // console.log('delete quote', quote);
    // this.afDb.list('quotesDB').remove(quote.key);
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.afDb.list('quotesDB').remove(quote.key);
    } else {
      return null;
    }
  }

  ShowQuoteDetails(quote) {

  }

  toggleToEditMode(quote) {
    this.quotesService.editQuote(quote);
  }
}
// if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
//   this.appareilService.switchOffAll();
// } else {
//   return null;
// }