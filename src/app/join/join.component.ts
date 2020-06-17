import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".team-carousel").owlCarousel();
    })
  }

}
