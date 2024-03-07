import {Component, OnInit} from '@angular/core';
import {ThemingService} from "./shared/services/theming.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true
})
export class AppComponent {

  constructor(
    private themingService: ThemingService
  ) {
    if(!localStorage['theme']) {
      localStorage['theme'] = 'saga-blue';
    }else{
      this.themingService.switchTheming(localStorage['theme'])
    }
  }

  trocarTema(){
    this.themingService.switchTheming(localStorage['theme'] == 'vela-blue' ? localStorage['theme'] = 'saga-blue' : localStorage['theme'] = 'vela-blue');
  }

  protected readonly localStorage = localStorage;
}
