import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'firebase/database';
import {AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
declare var $:any;
declare var M:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  code:string = "profession: {title: 'Perito en Informática', school: 'Centro Educativo Técnico Laboral Kinal'}"
  contactForm: FormGroup;
  messages: Observable<any[]>;
  constructor(private fb: FormBuilder, public db: AngularFireDatabase) {
    $(document).ready(function(){
      $('.parallax').parallax();
      $('.modal').modal();
      $('.tap-target').tapTarget();
    });
    M.toast({html: 'Bienvenid@ a mi página!'});
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.compose([Validators.required, Validators.maxLength(150)])],
      date: [new Date(), Validators.required]
    })
         
    this.messages = this.db.list('messages').valueChanges();
   }

  ngOnInit() {
  }

  showContactModal(){
    M.toast({html: 'Tapped!'});
    setTimeout(() => {
      M.Toast.dismissAll();
      $.ajax({
        url: "https://reqres.in/api/users?page=2",
        context: document.body
      }).done((function(r){
        console.log(r)
        M.toast({html: 'Peticion exitosa!'});
      }))
    }, 1500)

  }

  close(){
    $('.modal').modal('close')
  }

  sendMessage(){
    this.db.list('messages').push(this.contactForm.value).then(() => {
      this.contactForm.disable();
      M.toast({html: 'Mensaje enviado con éxito!'});
    })
    .catch((err) => {
      M.toast({html: err});
    })
  }

}
