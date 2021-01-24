import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tty-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('counterWrap', { static: true }) counterWrap: ElementRef;
  products: any;
  team: any;
  heroSlides: any;
  heroSlidesOptions: OwlOptions;
  testimonials: any;
  testimonialOptions: OwlOptions;
  pricing: any;
  // transitionsList: any = transitionsJSON[0];

  consultationForm = {
    firstName: '',
    lastName: '',
    service: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  }

  constructor(private dataService: DataService) {
    this.dataService.getDatabaseByName('pricing').valueChanges().subscribe(results => {
      this.pricing = results[0]['data'];
    })
    this.dataService.getDatabaseByName('testimonials').valueChanges().subscribe(results => {
      this.testimonials = results[0]['data'];
      this.testimonialOptions = results[0]['carouselOptions'];
    })
    this.dataService.getDatabaseByName('products').valueChanges().subscribe(results => {
      this.products = results[0]['data'];
    })
    this.dataService.getDatabaseByName('team').valueChanges().subscribe(results => {
      this.team = results[0]['data'];
    })
    this.dataService.getDatabaseByName('heroSlides').valueChanges().subscribe(results => {
      this.heroSlides = results[0]['data'];
      this.heroSlidesOptions = results[0]['carouselOptions'];
    })
  }

  ngOnInit(): void {
  }
  submitConsultationForm(formData: any, form: NgForm) {
    this.dataService.setCollectionItem('consultations', formData);
    console.log('Consultation Form Data', formData, form);
    this.consultationForm = {
      firstName: '',
      lastName: '',
      service: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    };
  }

}

// TODO: Disable unavailable consultation **dates and times** retrieved from database
