import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './Home/home.component';
import { RoomComponent } from './Room/room/room.component';
import { ShowRoomComponent } from './Room/show-room/show-room.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'room', component: RoomComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'test', component: TestComponent },
  { path: 'showRoom/:id', component: ShowRoomComponent },
   { path: 'showRoom', component: ShowRoomComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
