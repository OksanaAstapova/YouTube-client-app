import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(results: Item[], filterData: string): Item[] {
    if(!filterData) return results;

    return results.filter((result) =>
      result.snippet.title.toLowerCase().includes(filterData.toLowerCase()),
    );
  }

}
