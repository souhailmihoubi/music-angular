import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Album } from '../model/album.model';
import { SongService } from '../services/song.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  album!: Album;

  uploadedImage!: File;

  image: any;

  image1 = new Image();
  response: any;
  listImages: String[] = [];

  updatedAlbum: Album = {
    "idAlbum": 0,
    "albumName": '',
    "singerName": '',
    "releaseDate": new Date(),
  };

  ajout: boolean = true;

  constructor(private songService: SongService, private router: Router) {}

  ngOnInit(): void {
    this.songService.albumList().
    subscribe(albs => {this.albums = albs._embedded.albums;
    console.log(albs);
    });  }

  chargerAlbums() {
    this.songService.albumList().
    subscribe(albs => {this.albums = albs._embedded.albums;
    console.log(albs);
    });
  }

  albumUpdated(alb: Album) {
    this.songService.addAlbum(alb).subscribe(() => this.chargerAlbums());
  }

 

 

  updateAlbum(alb: Album) {
    this.updatedAlbum = alb;
    console.log(alb);
    this.ajout = false;
    this.router.navigate(['albums']);
  }

  deleteAlbum(alb: Album) {
    let conf = confirm('Are you Sure ?');
    if (conf)
      this.songService.deleteAlbum(alb.idAlbum).subscribe(() => {
        this.chargerAlbums();
      });
  }
}
