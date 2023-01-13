import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HotelInfoService } from '../../Shared/hotel-info.service';
import { HotelInfo } from '../../Shared/HotelInfo';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  searchText: any;
  constructor(
    private toastr: ToastrService, public service2: HotelInfoService) { }

  ngOnInit(): void {

   
    this.service2.refreshList();
  }

 
  populateForm2(selectedRecord: HotelInfo) {
    this.service2.formData = Object.assign({}, selectedRecord);
  }


}
