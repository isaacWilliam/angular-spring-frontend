import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormValidators} from "../../form-validators";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-form-error',
    templateUrl: './form-error.component.html',
    styleUrls: ['./form-error.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class FormErrorComponent{

  @Input() form: any;
  @Input() title: string = '';
  @Output() calback: EventEmitter<any> = new EventEmitter<any>();
  @Input() control: any;

  //todo Nesse tipo de método get não podemos atribuir valor mas podemos retornar
  get errorMsg():string | null{
    for (let controlKey in this.control.errors) {
      if(this.control.errors.hasOwnProperty(controlKey) && this.control.touched){
        return FormValidators.mensagemErro(this.title, controlKey, this.control.errors[controlKey]);
      }
    }
    return null;
  }

}
