import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  options: any;
  overlays: any[];
  ngOnInit() {

    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };

  }

}
