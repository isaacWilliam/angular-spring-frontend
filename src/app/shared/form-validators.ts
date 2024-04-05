import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup
} from "@angular/forms";
import {reduce} from "rxjs";

export class FormValidators {
  static requiredMinCheckBox(min = 1): Object | undefined{
    // const validator = (formArray: FormArray) => {
    //   const totalChecked = formArray.controls.map(v => v.value).reduce((total, current) => current ? total + current : total, 0);
    //   return totalChecked >= min ? null : {required: true};
    // }
    // return validator;
    return (formArray: FormArray) => {
      // const valor = formArray.controls;
      // let totalChecked = 0;
      // valor.forEach(item => {if(item.value) totalChecked ++})
      const totalChecked = formArray.controls.map(v => v.value).reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : {required: true};
    };
  }

  static validatorCep(control: FormControl){
    const cep = control.value;
    if(cep && cep != ''){
      const validaCep = /^[0-9]{8}$/
      return validaCep.test(cep) ? null : {cepInvalido: true};
    }
    return null;
  }

  static camposIguais(control: string){
    if (control){
      return (formControl: FormControl) => {
        return formControl.value !== formControl.root.get(control)?.value ? {camposDiferentes: true} : null;
      }
    }else {
      return null
    }
  }

  // todo o validatorValue é usado em erros onde especifica quantos valores precisa para requisição minima ou máxima
  static mensagemErro(campo: string, typeErro: string, validatorValue?: any){
    const config: any = {
      'minlength' : `${campo} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength' : `${campo} pode ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'required': `${campo} é obrigatório.`,
      'email': `${campo} o e-mail é inválido.`,
      'cepInvalido': 'O CEP é inválido.',
      'camposDiferentes': 'Os e-mails precisam der iguais.',
    }
    return config[typeErro];
  }

  static setTouchAllInputs(form: UntypedFormGroup | UntypedFormArray){
    Object.keys(form.controls).forEach(campo => {
      let input = form.get(campo);
      if(input instanceof UntypedFormControl){
        input.markAsTouched({onlySelf: true});
      }
      if(input instanceof UntypedFormGroup || input instanceof UntypedFormArray){
        input.markAsTouched({onlySelf: true});
        this.setTouchAllInputs(input)
      }
    })
  }

  static getStatusValidForm(control: UntypedFormControl | AbstractControl) {
    return control && control.errors && control.touched;
  }

}
