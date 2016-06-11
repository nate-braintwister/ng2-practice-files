import { Component } from '@angular/core';

@Component({
    selector: 'main-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
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