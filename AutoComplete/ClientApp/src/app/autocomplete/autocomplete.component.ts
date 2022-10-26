import { Component, Input, OnInit } from '@angular/core';
import { CitiesDataService } from '../cities-data.service';
import { ICityDTO } from '../city-dto';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

    @Input() public minLength: number = 2;
    public suggestions: ICityDTO[];
    public inputValue: string;
    public prevValue: string;

    constructor(private svc: CitiesDataService) { }

    ngOnInit() {
    }

    getSuggestions(x) {
        if (this.prevValue != x.target.value) {
            if (x.target.value.length >= this.minLength) {
                this.svc.getCities(x.target.value).subscribe({
                    next: d => this.suggestions = d,
                    error: e => console.error(e)
                })
            }
            else {
                this.suggestions = [];
            }
            this.prevValue = x.target.value;
        }
    }

    test($event) {
        alert($event.target);
    }

}
