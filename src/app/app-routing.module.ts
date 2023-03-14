import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ContainerComponent  },
  {path:"post", component:PostComponent  },
  {path:"post/:id", component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

