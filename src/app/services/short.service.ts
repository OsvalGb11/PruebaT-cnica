import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class urlShortService {
    URL = 'https://api.shrtco.de/v2/shorten?url=';
    constructor(private http: HttpClient) { }
    geturlShort(nombreUrl: string): Observable<any> {
        return this.http.get('https://api.shrtco.de/v2/shorten?url=' + `${nombreUrl}`);
    }
}
