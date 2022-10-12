import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/models/search-item.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(results: Item[], sortBy: string): Item[] {

    if(!sortBy) return results;

    const [sortCriteria, sortDirection] = sortBy.split('-');

    return results.sort((a, b) => {
      if (sortCriteria === 'date') {
        const aDate = new Date(a.snippet.publishedAt).getTime();
        const bDate = new Date(b.snippet.publishedAt).getTime();
        return (aDate - bDate) * (sortDirection === 'up' ? 1 : -1);
      }

      if (sortCriteria === 'views') {
        const aViews = Number(a.statistics.viewCount);
        const bViews = Number(b.statistics.viewCount);
        return (aViews - bViews) * (sortDirection === 'up' ? 1 : -1);
      }

      return 0;
    });
  }

}
