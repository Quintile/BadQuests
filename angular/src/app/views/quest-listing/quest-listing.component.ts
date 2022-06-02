import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Quest } from '../../interface/quest';
import { QuestsService } from '../../services/quests.service';

@Component({
    selector: 'app-quest-listing',
    templateUrl: './quest-listing.component.html',
    styleUrls: ['./quest-listing.component.scss'],
})
export class QuestListingComponent implements OnInit {
    public badQuests: Quest[] = [];
    public form: FormGroup = this.forms.group({
        explanation: [''],
        name: ['', Validators.required],
        zone: ['', Validators.required],
    });

    public constructor(
        private readonly forms: FormBuilder,
        private readonly quests: QuestsService,
        public readonly route: ActivatedRoute,
    ) {
        //
    }

    public ngOnInit(): void {
        this.route.data.pipe(
            map((data) => data['quests']),
        ).subscribe((quests) => this.badQuests = quests);
    }

    public onSave(): void {
        const value = this.form.value;
        this.form.reset();

        this.quests.save(value).subscribe((quest) => {
            this.badQuests.push(quest);
        });
    }
}
