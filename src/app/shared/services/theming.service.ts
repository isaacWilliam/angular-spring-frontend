import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  switchTheming(theme: string){
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if(themeLink) themeLink.href = `${theme}.css`;
  }

}
