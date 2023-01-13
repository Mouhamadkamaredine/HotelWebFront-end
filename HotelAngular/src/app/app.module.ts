import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { RoomComponent } from './Room/room/room.component';
import { AboutComponent } from './About/about/about.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatFabMenuModule } from '@angular-material-extensions/fab-menu';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { ShowRoomComponent } from './Room/show-room/show-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    AboutComponent,
    NavbarComponent,
    ContactComponent,
    TestComponent,
    ShowRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot({ progressBar: true }),
    BrowserAnimationsModule,
    RouterModule.forRoot([], { scrollPositionRestoration: 'enabled' }),
    MatButtonModule,
    MDBBootstrapModule,
    MatFabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
