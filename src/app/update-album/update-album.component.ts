import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../model/album.model';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
})
export class UpdateAlbumComponent implements OnInit {
  @Input()
  albums!: Album;

  @Output()
  albumUpdated = new EventEmitter<Album>();

  @Input()
  ajout!: boolean;

  uploadedImage!: File;
  image: any;
  response: any;

  constructor() {}
  ngOnInit(): void {}

  saveAlbum() {
    this.albumUpdated.emit(this.albums);
  }
}
