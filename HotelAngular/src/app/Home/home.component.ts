import { AfterViewInit, Component, OnInit } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ToastrService } from 'ngx-toastr';
import { Facility } from '../Shared/Facility';
import { FacilityService } from '../Shared/facility.service';
import { HotelInfoService } from '../Shared/hotel-info.service';
import { HotelInfo } from '../Shared/HotelInfo (2)';
import { RoomServiceService } from '../Shared/room-service.service';
import { AddRooms } from '../Shared/Rooms.model';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnInit {
  constructor(
    public service: FacilityService,
    public service1: RoomServiceService,
    public service2: HotelInfoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshList();
    this.service1.refreshList();
    this.service2.refreshList();
  }

  populateForm(selectedRecord: Facility) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  populateForm1(selectedRecord: AddRooms) {
    this.service1.formData = Object.assign({}, selectedRecord);
  }
  populateForm2(selectedRecord: HotelInfo) {
    this.service2.formData = Object.assign({}, selectedRecord);
  }

  initScrollTrigger() {
    gsap.to('.menu, .nav-list, .bottom', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: 'section.home',
        scrub: true,
        start: '60% 60%',
        end: '70% 30%',
      },
    });

    gsap.to('.heading-main', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: 'section.two',
        scrub: true,
        start: '70% 60%',
        end: '85% 30%',
      },
    });

    gsap.to('figure.preview', {
      scrollTrigger: {
        toggleClass: 'active',
        trigger: 'figure.preview',
        start: '50% 80%',
        end: '85% 20%',
      },
    });
  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }
}
