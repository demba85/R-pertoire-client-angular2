import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';


@Injectable()
export class QuotesService {
  subject = new Subject();

  constructor(private afDb: AngularFireDatabase, private router: Router) { }


  getQuotes() {
   //return this.afDb.list('quotesDB').valueChanges();
    return this.afDb.list('quotesDB').snapshotChanges().map(quotesDB => quotesDB.map(quote => ({ key: quote.key, ...quote.payload.val() })));
  }

  saveQuote(quote) {
   return this.afDb.list('quotesDB').push(quote);
  }

  deleteQuote(id: string) {
    return this.afDb.list('quotesDB').remove(id);
  }

  editQuote(quote) {
    this.subject.next(quote);
  }

  updateQuote(quote) {
    return this.afDb.object(`quotesDB/${quote.key}`).update(quote);
  }
}
