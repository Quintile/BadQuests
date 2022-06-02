import { Injectable } from '@angular/core';
import {
    Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Quest } from '../interface/quest';
import { QuestsService } from '../services/quests.service';

@Injectable({
    providedIn: 'root',
})
export class QuestsResolver implements Resolve<Quest[]> {
    public constructor(
        private readonly quests: QuestsService,
    ) {
        //
    }

    public resolve(): Observable<Quest[]> {
        return this.quests.get();
    }
}
