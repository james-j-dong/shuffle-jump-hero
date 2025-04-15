import { Routes } from '@angular/router';
import { GenerateEmbedComponent } from './components/generate-embed/generate-embed.component';
import { PreviewContentComponent } from './components/preview-content/preview-content.component';
import { HomeComponent } from './components/home/home.component';
import { ContentPlayerComponent } from './components/content-player/content-player.component';

export const routes: Routes = [ 
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent,
        children: [
            {path: 'generate-embed', component: GenerateEmbedComponent},
            {path: 'preview-content', component: PreviewContentComponent},
        ]
    },
    {path: 'content-player', component: ContentPlayerComponent}

];
