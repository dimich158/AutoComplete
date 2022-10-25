import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICityDTO } from './city-dto';

@Injectable({
  providedIn: 'root'
})
export class CitiesDataService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getCities(q: string): Observable<ICityDTO[]>
    {
        return this.http.get<ICityDTO[]>(this.baseUrl + 'AutoComplete?q=' + q);
    }
}
