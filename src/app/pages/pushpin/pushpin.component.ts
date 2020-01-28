import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-pushpin',
  templateUrl: './pushpin.component.html',
  styleUrls: ['./pushpin.component.css']
})
export class PushpinComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
      $('.pushpin').pushpin();
    });
          
   }

  ngOnInit() {
  }

}
