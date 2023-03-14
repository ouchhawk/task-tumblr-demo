import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content/content.component';
import { PostComponent } from './components/post/post/post.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ContentComponent  },
  {path:"post", component:PostComponent  },
  {path:"post/:id", component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

