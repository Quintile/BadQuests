import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestsResolver } from './resolvers/quests.resolver';
import { QuestListingComponent } from './views/quest-listing/quest-listing.component';

const routes: Routes = [
    {
        component: QuestListingComponent,
        path: '',
        resolve: {
            quests: QuestsResolver,
        }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
