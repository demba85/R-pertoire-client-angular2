import { Routes, RouterModule } from '@angular/router';
//import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { AcceuilComponent } from './acceil/acceuil/acceuil.component';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
    },

    {
        path: 'accueil',
        component: AcceuilComponent
    },
    //{
     //   path: 'accueil',
      //  component: QuotesComponent
   // },
    {
        path: 'ajouterClient', //'details/:id'
        component: CreateQuoteComponent 

    }
]

export const routing = RouterModule.forRoot(appRoutes);

