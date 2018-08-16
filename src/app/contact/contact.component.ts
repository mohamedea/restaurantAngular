import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  numberToDisplay = '';

  standard = {
    firstName: 'Kader',
    lastName: 'Zerrouki',
    role: 'Acceuil',
    award: '',
    phoneNumber: '02 - 99 - 99 - 99 - 01',
  };

  sommelier = {
    firstName: 'salem',
    lastName: 'Zerrouki',
    role: 'Sommelier',
    award: 'Meilleur ouvrié de France 2012',
    phoneNumber: '02 - 99 - 99 - 99 - 88',
  };

  boucher = {
    firstName: 'Ahmed',
    lastName: 'El Majoub',
    role: 'Boucher',
    award: 'Meilleur ouvrié de France 2015',
    phoneNumber: '02 - 99 - 99 - 99 - 44',
  };

  constructor() { }

  ngOnInit() {
  }
  displayBig(telephoneNumber) {
    console.log(telephoneNumber);
    this.numberToDisplay = telephoneNumber;
  }
}
