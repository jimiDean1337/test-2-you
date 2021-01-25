import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';
import { TestingComponent } from './pages/testing/testing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      id: 0
    }
  },
  {
    path: 'scheduling',
    component: SchedulingComponent,
    data: {
      id: 1
    }
  },
  {
    path: 'testing',
    component: TestingComponent,
    data: {
      id: 4
    }
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: {
      id: 5
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      id: 2
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      id: 3
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      id: 6
    }
  },
  {
    path: 'blog-post',
    component: BlogPostComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
