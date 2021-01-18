import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { LoaderComponent } from './elements/loader/loader.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';
import { TestingComponent } from './pages/testing/testing.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CoreModule } from './core/core.module';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SchedulingComponent,
    TestingComponent,
    PricingComponent,
    BlogComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CountUpModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HeaderComponent, FooterComponent, LoaderComponent]
})
export class AppModule { }
