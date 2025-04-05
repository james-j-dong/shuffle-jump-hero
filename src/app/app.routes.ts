import { Routes } from '@angular/router';
import { GenerateEmbedComponent } from './components/generate-embed/generate-embed.component';
import { PreviewContentComponent } from './components/preview-content/preview-content.component';

export const routes: Routes = [ 
    // {path: '', component: AppComponent},
    {path: 'generate-embed', component: GenerateEmbedComponent},
    {path: 'preview-content', component: PreviewContentComponent},

];
