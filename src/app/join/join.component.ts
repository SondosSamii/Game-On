import { Component, OnInit } from "@angular/core";

declare let $: any;

@Component({
  selector: "app-join",
  templateUrl: "./join.component.html",
  styleUrls: ["./join.component.scss"],
})
export class JoinComponent implements OnInit {
  ngOnInit() {
    $(document).ready(() => {
      $(".team-carousel").owlCarousel();
    });
  }
}
