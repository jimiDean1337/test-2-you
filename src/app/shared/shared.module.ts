import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { DividerComponent } from './divider/divider.component';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ParallaxModule } from 'ngx-parallax';



@NgModule({
  declarations: [CarouselHolderComponent, SafeHtmlPipe, DividerComponent, TabsComponent, HeroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    TimepickerModule.forRoot(),
    ParallaxModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BsDropdownModule,
    AlertModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    AccordionModule,
    CollapseModule,
    TabsModule,
    TypeaheadModule,
    BsDatepickerModule,
    ProgressbarModule,
    PaginationModule,
    TimepickerModule,
    CarouselHolderComponent,
    SafeHtmlPipe,
    DividerComponent,
    TabsComponent,
    HeroComponent
  ],
  entryComponents: [CarouselHolderComponent, DividerComponent, TabsComponent, HeroComponent]
})
export class SharedModule { }
