import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteFilterService {

  constructor() { }

  public static filterFunction(value: string, dataToFilter : string []): string []{
    const filterValue = value.toLowerCase();
    return dataToFilter.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
