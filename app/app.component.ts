import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  template: `
    <h1>{{title}}</h1>
    <p>{{subtitle}}</p>
    <ul>
        <li *ngFor="let name of names">{{name}}</li>
    </ul>
  `
})

export class AppComponent {
    title: string;
    subtitle: string;
    names: string[];

    constructor(){
        this.title = "baseHQ";
        this.subtitle = "Find Your Perfect Roommate!";
        this.names = ["Jeffrey", "Nigel", "Nate"];
    }
}