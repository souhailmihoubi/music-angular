import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Song } from '../model/song.model';
import { Album } from '../model/album.model';
import { apiURL } from '../config';
import { AlbumWrapper } from '../model/albumWrepped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SongService {
  apiURLAlbum: string = 'http://localhost:8080/music/album';

  songs!: Song[];
  albums!: Album[];

  song!: Song;

  constructor(private http: HttpClient) {}

  songsList(): Observable<Song[]> {
    return this.http.get<Song[]>(apiURL);
  }

  albumList(): Observable<AlbumWrapper> {
    return this.http.get<AlbumWrapper>(this.apiURLAlbum);
  }

  consultAlbum(id: number): Album {
    return this.albums.find((alb) => alb.idAlbum == id)!;
  }

  addSong(song: Song): Observable<Song> {
    return this.http.post<Song>(apiURL, song, httpOptions);
  }

  consultSong(id: number): Observable<Song> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Song>(url);
  }

  deleteSong(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  updateSong(s: Song): Observable<Song> {
    return this.http.put<Song>(apiURL, s, httpOptions);
  }

  triSongs() {
    this.songs = this.songs.sort((n1, n2) => {
      if (n1.idSong > n2.idSong) {
        return 1;
      }
      if (n1.idSong < n2.idSong) {
        return -1;
      }
      return 0;
    });
  }

  searchByAlbum(idAlbum: number): Observable<Song[]> {
    const url = `${apiURL}/prodscat/${idAlbum}`;
    return this.http.get<Song[]>(url);
  }

  searchSong(name: string):Observable< Song[]> {
    const url = `${apiURL}/songsByName/${name}`;
    return this.http.get<Song[]>(url);
    }
}
