import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuotesService } from '../services/quotes.service';
import { Quote } from './../../quote.interface';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/services/auth.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  form: FormGroup;
  private active: boolean = true;


  @Output()
  create = new EventEmitter();


  @Output()
  update = new EventEmitter();

  isInEditMode = false;
  verb = 'Envoyé';
  isAdmin: boolean = false;


  constructor(private formBuilder: FormBuilder, private quotesService: QuotesService, private authService: AuthService ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: ['', Validators.required],
      telephone: ['', Validators.required ],
      key: ['']
    });

    this.quotesService.subject.subscribe(data => {
      this.isInEditMode = true;
      this.verb = 'modifier';
      console.log('data', data);
      this.form.get('firstname').patchValue((data as Quote).firstname);
      this.form.get('lastname').patchValue((data as Quote).lastname);
      this.form.get('email').patchValue((data as Quote).email);
      this.form.get('telephone').patchValue((data as Quote ).telephone);
      this.form.get('key').patchValue((data as Quote).key);
    })

    this.authService.user$.subscribe(user => { // Pour permettre a une seule personne de supprimé ou modifier
      console.log('user:', user);
      if (user && user.email === 'demba.sobre@gmail.com') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    })
  }

  saveQuote() {
   console.log('form valid', this.form.valid);
   if(!this.form.valid) {
     this.create.emit(this.form);//todo to firebase
     console.log('form NOT valid');
     return;
    }
    console.log('form is valid');
    if(!this.isInEditMode) {
     this.verb = 'modifier';
      this.create.emit(this.form);
    }else if (this.isInEditMode) {
      this.update.emit(this.form);
      this.isInEditMode = !this.isInEditMode;
    }
    this.form.reset();  // Permet de supprimé le formulaire aprés soumission
    this.active = false;
    setTimeout(() => this.active = true, 0);
    this.active = false;
    this.verb = 'envoyer';
  
   }

  cancelEdit() {
    this.isInEditMode = false;
    this.verb = 'ajouter';
    this.form.reset();
  }


}
