import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AlbumsComponent } from './albums/albums.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSongComponent } from './update-song/update-song.component';
import { RechercheParAlbumComponent } from './recherche-par-album/recherche-par-album.component';
import { UpdateAlbumComponent } from './update-album/update-album.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';





@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    AddSongComponent,
    AlbumsComponent,
    AddAlbumComponent,
    HomeComponent,
    UpdateSongComponent,
    RechercheParAlbumComponent,
    UpdateAlbumComponent,
    LoginComponent,
    ForbiddenComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
