import { Component, OnInit } from '@angular/core';

declare var $:any;
declare var M:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  code:string = "profession: {title: 'Perito en Informática', school: 'Centro Educativo Técnico Laboral Kinal'}"
  constructor() {
    $(document).ready(function(){
      $('.parallax').parallax();
      $('.modal').modal();
    });
    M.toast({html: 'Bienvenid@/Welcome!'});
         
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

}
