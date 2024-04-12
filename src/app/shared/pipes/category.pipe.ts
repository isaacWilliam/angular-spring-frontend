import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category',
    standalone: true
})

export class CategoryPipe implements PipeTransform {

  transform(category: unknown): { label: string, icon: string } {
    switch (category){
      case  1: return {label: 'Backend',icon: 'pi pi-code'};
      case  2: return {label: 'Frontend', icon: 'pi pi-desktop'};
      default : return {label: 'Unknown',icon: 'pi pi-question'}
    }
  }

}
