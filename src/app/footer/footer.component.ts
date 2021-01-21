import { Component, OnInit } from '@angular/core';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  faLinkedin = faLinkedinIn;
  constructor() { }

  ngOnInit(): void {
  }

}
