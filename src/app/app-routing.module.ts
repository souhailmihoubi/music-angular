import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AlbumsComponent } from './albums/albums.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Song } from './model/song.model';
import { RechercheParAlbumComponent } from './recherche-par-album/recherche-par-album.component';
import { SongGuard } from './song.guard';
import { SongsComponent } from './songs/songs.component';
import { UpdateSongComponent } from './update-song/update-song.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"songs", component:SongsComponent},
  {path:"add-song", component:AddSongComponent , canActivate:[SongGuard]},
  {path:"albums", component:AlbumsComponent},
  {path:"add-album", component:AddAlbumComponent},
  {path:"updateSong/:id", component:UpdateSongComponent},
  {path:"serchByAlbum", component:RechercheParAlbumComponent},
  {path:'login', component:LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
