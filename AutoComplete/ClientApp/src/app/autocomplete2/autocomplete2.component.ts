import { Component, Input, OnInit } from '@angular/core';
import { CitiesDataService } from '../cities-data.service';
import { ICityDTO } from '../city-dto';

@Component({
  selector: 'app-autocomplete2',
  templateUrl: './autocomplete2.component.html',
  styleUrls: ['./autocomplete2.component.css']
})
export class Autocomplete2Component implements OnInit {

    @Input() public  minLength: number = 2;
    public suggestions: ICityDTO[] = [];
    public inputValue: string;
    public prevValue: string;
    public isShowSugg: boolean = true;
    public activeItemIndex: number = -1;

    constructor(private svc: CitiesDataService) { }

    ngOnInit() {
        document.addEventListener("click", () => this.isShowSugg = false);
    }

    getSuggestions(v: string) {
        this.isShowSugg = true;
        this.activeItemIndex = -1;
        if (this.prevValue != v) {
            if (v.length >= this.minLength) {
                this.svc.getCities(v).subscribe({
                    next: d => this.suggestions = d,
                    error: e => console.error(e)
                })
            }
            else {
                this.suggestions = [];
            }
            this.prevValue = v;
        }
    }

    setInputValue(v: string) {
        this.inputValue = v;
        this.getSuggestions(v);
        this.isShowSugg = false;
    }


    onKeyDownSuggestions($event) {
        if ($event.keyCode == 40) /*DOWN*/{
            this.isShowSugg = true;
            $event.preventDefault();
            this.suggestions.forEach(v => v.isActive = false);
            this.activeItemIndex++;
            if (this.activeItemIndex >= this.suggestions.length) {
                this.activeItemIndex = 0;
            }
            if (this.activeItemIndex >= 0 && this.activeItemIndex < this.suggestions.length) {
                this.suggestions[this.activeItemIndex].isActive = true;
            }
        }
        else if ($event.keyCode == 38)/*UP*/ {
            this.isShowSugg = true;
            $event.preventDefault();
            this.suggestions.forEach(v => v.isActive = false);
            if (this.activeItemIndex <= 0) {
                this.activeItemIndex = this.suggestions.length - 1;
            } else {
                this.activeItemIndex--;
            }
            if (this.activeItemIndex >= 0 && this.activeItemIndex < this.suggestions.length) {
                this.suggestions[this.activeItemIndex].isActive = true;
            }
        } else if ($event.keyCode == 13)/*ENTER*/ {
            $event.preventDefault();
            if (this.activeItemIndex >= 0 && this.activeItemIndex < this.suggestions.length) {
                this.setInputValue(this.suggestions[this.activeItemIndex].cityName);
                this.isShowSugg = false;
            }
        }
    }   
}
