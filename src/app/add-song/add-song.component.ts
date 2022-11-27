import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from '../model/song.model';
import { Album } from '../model/album.model';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css'],
})
export class AddSongComponent implements OnInit {
  newSong = new Song();

  albums!: Album[];
  newIdAlb!: number;
  newAlbum!: Album;

  constructor(private songService: SongService, private router: Router) {}

  ngOnInit(): void {
    this.songService.albumList().subscribe((albms) => {
      this.albums = albms._embedded.albums;
      console.log(albms);
    });
  }

  addSong() {
    this.newSong.album = this.albums.find(
      (albm) => albm.idAlbum == this.newIdAlb
    )!;
    this.songService.addSong(this.newSong).subscribe((sng) => {
      console.log(sng);
      this.router.navigate(['songs']);
    });
  }
}
