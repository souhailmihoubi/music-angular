import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../model/album.model';
import { Song } from '../model/song.model';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
})
export class UpdateSongComponent implements OnInit {
  albums!: Album[];
  updatedAlbumId!: number;

  currentSong = new Song();

  constructor(
    private activedRoute: ActivatedRoute,
    private songServise: SongService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.songServise.albumList().subscribe((albms) => {
      this.albums = albms._embedded.albums;
      console.log(albms);
    });
    this.songServise
      .consultSong(this.activedRoute.snapshot.params['id'])
      .subscribe((sng) => {
        this.currentSong = sng;
        this.updatedAlbumId = this.currentSong.album.idAlbum;
      });
  }

  updateSong() {
    this.currentSong.album = this.albums.find((albm) => albm.idAlbum == this.updatedAlbumId)!;
    this.songServise.updateSong(this.currentSong).subscribe((sng) => {
      this.router.navigate(['songs']);
    });
  }
}
