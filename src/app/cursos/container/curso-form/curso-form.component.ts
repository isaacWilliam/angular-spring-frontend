import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";

import {CursoService} from "../../services/curso.service";
import {MessageLayoutService} from "../../../shared/services/message.layout.service";
import {ActivatedRoute} from "@angular/router";
import {Curso} from "../../model/curso";

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
  preserveWhitespaces: true
})
export class CursoFormComponent implements OnInit{

  // formGroup: UntypedFormGroup = new UntypedFormGroup({});
  formGroup: FormGroup = new FormGroup({});
  loading: boolean = false;
  category = [
    {label: 'Back-end', code: 1},
    {label: 'Front-end', code: 2}
  ]
  constructor(
    // private formBuilder: UntypedFormBuilder,
    // private formBuilder: NonNullableFormBuilder,
    private formBuilder: FormBuilder,
    private service: CursoService,
    private messageLayoutService: MessageLayoutService,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(){
    const curso = this.route.snapshot.data['curso'];
    this.createForm(curso);
  }

  createForm(curso: Curso){
    this.formGroup = this.formBuilder.group({
      id: [curso.id],
      dsNome: [curso.dsNome, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      nmCategory: [curso.nmCategory, [Validators.required]]
    })
  }

  enviar(){
    this.loading = true;
    // setTimeout(() => {
      this.loading = false;
      this.service.save(this.formGroup.value).subscribe({
        next: (n: Curso) => {
          this.showSimpleToast('success', 'Sucesso', 'Curso salvo com sucesso.');
          this.cancel();
        },
        error: (e: any) => {
          this.showSimpleToast('error', 'Erro na Requisição', 'Retorne a página anterior.');
        }
      });
    // }, 4000)

  }
  showSimpleToast(severity: string, summary: string, detail: string){
    this.messageLayoutService.showSimpleToast({severity, summary, detail})
  }

  cancel(){
    this.location.back();
  }

  getError(control: string): string | undefined {
    const campo = this.formGroup.get(control);
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

  getValidForm(control: string){
    const campo = this.formGroup.get(control);
     return campo && campo.errors && campo.touched;
  }
}
