import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allMovies: any[], movieName=''): any {
    if(!movieName.trim()) {
      return allMovies
    }

    return allMovies.filter(elem => elem.title.toLowerCase().includes(movieName.toLowerCase()))
  }

}
