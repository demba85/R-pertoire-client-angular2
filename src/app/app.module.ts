import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Formulaire
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Routage
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RegisterUserComponent } from './authentication/register-user.component';
import { AcceuilComponent } from './acceil/acceuil/acceuil.component';
//Material design
import { MaterialModule } from './material.module';

//service
import { QuotesService } from './services/quotes.service';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { AuthService } from './authentication/services/auth.service';
import { LoginComponent } from './authentication/login/login.component';





const CONFIG: FirebaseAppConfig = {
    apiKey: "AIzaSyDDifU43ZrPYY870mbHZPU-YqMbYPjsq2o",
  authDomain: "filao-pressing.firebaseapp.com",
  databaseURL: "https://filao-pressing.firebaseio.com",
  projectId: "filao-pressing",
  storageBucket: "filao-pressing.appspot.com",
  messagingSenderId: "489132831767"
  };


// const ROUTES: Routes = [

//   { path: '', pathMatch: 'full', component: QuotesComponent },
//   { path: 'quote/id', component: CreateQuoteComponent },
//   { path: 'admin', component: QuoteDetailsComponent }

// ];


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    RegisterUserComponent,
    LoginComponent,
    AcceuilComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    routing,
    AngularFireAuthModule
  ],


  providers: [
    QuotesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
