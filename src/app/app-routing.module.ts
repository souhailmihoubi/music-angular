import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path: "songs", component:SongsComponent},
  {path:"add-song", component:AddSongComponent},
  {path:"albums", component:AlbumsComponent},
  {path:"add-album", component:AddAlbumComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
