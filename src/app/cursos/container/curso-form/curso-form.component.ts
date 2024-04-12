import {Component, OnInit} from '@angular/core';
import { NonNullableFormBuilder, UntypedFormArray, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Location, NgIf } from "@angular/common";

import {CursoService} from "../../services/curso.service";
import {MessageLayoutService} from "../../../shared/services/message.layout.service";
import {ActivatedRoute} from "@angular/router";
import {Curso} from "../../model/curso";
import {Aula} from "../../model/aula";
import {FormValidators} from "../../../shared/form-validators";
import { RippleModule } from 'primeng/ripple';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormErrorComponent } from '../../../shared/components/form-error/form-error.component';
import { InputTextModule } from 'primeng/inputtext';
@Component({
    selector: 'app-curso-form',
    templateUrl: './curso-form.component.html',
    styleUrls: ['./curso-form.component.scss'],
    preserveWhitespaces: true,
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, InputTextModule, NgIf, FormErrorComponent, DropdownModule, ButtonModule, TableModule, SharedModule, RippleModule]
})
export class CursoFormComponent implements OnInit{

  // formGroup: UntypedFormGroup = new UntypedFormGroup({});
  form!: UntypedFormGroup;
  loading: boolean = false;
  category = [
    {label: 'Back-end', code: 1},
    {label: 'Front-end', code: 2}
  ]
  curso: any;
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CursoService,
    private messageLayoutService: MessageLayoutService,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(){
    this.curso = this.route.snapshot.data['curso'];
    this.createForm(this.curso);
  }

  createForm(curso: Curso){
    this.form = this.formBuilder.group({
      id: [curso.id],
      dsNome: [curso.dsNome, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      nmCategory: [curso.nmCategory, [Validators.required]],
      aulas: this.formBuilder.array(this.obterAulas(curso), Validators.required),
    })

  }

  private obterAulas(curso: Curso): any {
    const aulas = [];
    if(curso?.aulas) {
      curso.aulas.forEach(aula => aulas.push(this.createAula(aula)))
    } else {
      aulas.push(this.createAula())
    }
    return aulas;
  }

  private createAula(aula: Aula = {id: null, dsNome: '', dsYouTube: ''}) {
    return this.formBuilder.group({
      id: [aula.id],
      dsNome: [aula.dsNome, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      dsYouTube: [aula.dsYouTube, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    })
  }

  getAulasFormaArray() {
    return (<UntypedFormArray>this.form.get('aulas')).controls

  }

  addNovaAula() {
    const aula = this.form.get('aulas') as UntypedFormArray;
    aula.push(this.createAula());
  }

  deleteAula(index: number) {
    const aula = this.form.get('aulas') as UntypedFormArray;
    aula.removeAt(index);
  }
  enviar(){
    this.loading = true;
      if (this.form.valid) {
        this.service.save(this.form.value).subscribe({
          next: (n: Curso) => {
            this.showSimpleToast('success', 'Sucesso', 'Curso salvo com sucesso.');
            this.loading = false;
            this.cancel();
          },
          error: (e: any) => {
            this.loading = false;
            this.showSimpleToast('error', 'Erro na Requisição', 'Retorne a página anterior.');
          }
        });
      } else {
        FormValidators.setTouchAllInputs(this.form);
        this.loading = false;
      }

  }
  showSimpleToast(severity: string, summary: string, detail: string){
    this.messageLayoutService.showSimpleToast({severity, summary, detail})
  }

  cancel(){
    this.location.back();
  }

  getValidForm(control: any){
    return FormValidators.getStatusValidForm(control)
  }

}
