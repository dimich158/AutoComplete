import { Component, OnInit } from '@angular/core';
import { CitiesDataService } from '../cities-data.service';
import { ICityDTO } from '../city-dto';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

    suggestions: ICityDTO[];
    inputValue: string;
    prevValue: string;

    constructor(private svc: CitiesDataService) { }

    ngOnInit() {
    }

    getSuggestions(x) {
        if (this.prevValue != this.inputValue) {
            this.svc.getCities(this.inputValue).subscribe({
                next: d => this.suggestions = d,
                error: e => console.error(e)
            })
            this.prevValue = this.inputValue;
        }
    }

}
