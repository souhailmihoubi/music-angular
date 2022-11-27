import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { Song } from '../model/song.model';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
})
export class SongsComponent implements OnInit {
  songs!: Song[];
  song!: Song;
  albums!: Album[];
  IdAlbum!: number;
  songName!: string;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songService.songsList().subscribe((sngs) => {
      console.log(sngs);
      this.songs = sngs;
    });
    this.songService.albumList().subscribe((albs) => {
      this.albums = albs._embedded.albums;
      console.log(albs);
    });
  }

  chargerSongs() {
    this.songService.songsList().subscribe((sngs) => {
      console.log(sngs);
      this.songs = sngs;
    });
  }

  deleteSong(s: Song) {
    let conf = confirm('Are you Sure ?');
    if (conf)
      this.songService.deleteSong(s.idSong).subscribe(() => {
        console.log('song deleted');
        this.chargerSongs();
      });
  }

  editSong(s: Song) {
    let conf = confirm('Are you sure?');
    if (conf) {
      //  this.songService.deleteSong(s);
    }
  }

  all() {
    
    this.songService.songsList().subscribe((sngs) => {
      this.songs = sngs;
    });;
  }

  onChange() {
    this.songService.searchByAlbum(this.IdAlbum).subscribe((albums) => {
      this.songs = albums;
    });
  }

  searchSong() {
    if (this.songName == '') {
      this.songService.songsList().subscribe((sngs) => {
        this.songs = sngs;
        console.log(sngs);
      });
    } else {
      this.songService.searchSong(this.songName).subscribe((sngs) => {
        this.songs = sngs;
        console.log(sngs);
      });
    }
  }
}
