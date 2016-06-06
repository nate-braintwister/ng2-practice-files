import { Component } from '@angular/core';



@Component({
  selector: 'main-app',
  template:
  `
    <header class="main">
        <h1>{{pageTitle}}</h1>
        <p class="subtitle">{{subtitle}}</p>
    </header>
  `
})



export class AppComponent {
    pageTitle : string = "baseHQ";
    subtitle : string = "Find Your Home";
}
