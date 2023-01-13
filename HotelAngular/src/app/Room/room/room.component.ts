import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HotelInfoService } from '../../Shared/hotel-info.service';
import { HotelInfo } from '../../Shared/HotelInfo (2)';
import { RoomServiceService } from '../../Shared/room-service.service';
import { AddRooms } from '../../Shared/Rooms.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  searchText: any;
  constructor(public service: RoomServiceService,
    private toastr: ToastrService, public service2: HotelInfoService) { }

  ngOnInit(): void {

    this.service.refreshList();
    this.service2.refreshList();
  }

  populateForm(selectedRecord: AddRooms) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  populateForm2(selectedRecord: HotelInfo) {
    this.service2.formData = Object.assign({}, selectedRecord);
  }


}
