import { Injectable } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup
} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormUtilService {

  constructor() { }

  getError(campo: UntypedFormControl): string | undefined {
    if (campo?.hasError('required')){
      return 'Campo Obrigatório!';
    }

    if (campo?.errors && campo.hasError('minlength')){
      return campo.errors['minlength']['actualLength'] ? `Precisa de mais ${(5 - campo.errors['minlength']['actualLength'])} caracter` : `Precisa de 5 caracter.`;
    }

    if (campo?.hasError('maxlength')){
      return `Precisa ter no máximo 100 caracteres.`;
    }

    return 'Campo inválido!'

  }

  getFormArrayfieldError(formGroup: FormGroup, formArrayName: string) {
    const formArray = formGroup.get(formArrayName) as UntypedFormArray;

  }

}
