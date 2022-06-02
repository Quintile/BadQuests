import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Quest } from '../interface/quest';

@Injectable({
    providedIn: 'root',
})
export class QuestsService {

    public constructor(
        private readonly http: HttpClient,
    ) {
        //
    }

    public get(): Observable<Quest[]> {
        return this.http.get<Quest[]>(environment.url + '/api/quests');
    }

    public save(value: any): Observable<Quest> {
        return this.http.post<Quest>(environment.url + '/api/quests', value);
    }
}
