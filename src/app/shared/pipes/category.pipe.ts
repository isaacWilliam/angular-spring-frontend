import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})

export class CategoryPipe implements PipeTransform {

  transform(category: unknown): unknown {
    switch (category){
      case 'Frontend' : return 'pi pi-desktop';
      case 'Backend' : return 'pi pi-code';
    }
    return 'pi pi-desktop';
  }

}
