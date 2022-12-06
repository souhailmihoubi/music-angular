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
  apiURLAlbum1: string = 'http://localhost:8080/music/api/album';


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

  albumList1(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiURLAlbum1);
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
  deleteAlbum(id: number) {
    const url = `${this.apiURLAlbum}/${id}`;
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

  searchSong(name: string): Observable<Song[]> {
    const url = `${apiURL}/songsByName/${name}`;
    return this.http.get<Song[]>(url);
  }

  addAlbum(alb: Album): Observable<Album> {
    console.log(alb);
    return this.http.post<Album>(this.apiURLAlbum, alb, httpOptions);
  }

  uploadImage(file : File , filename : string) {

    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${apiURL + "/image/upload"}`
    return this.http.post(url ,imageFormData)
  }

  loadImage(id: number) {
    const url = `${apiURL + '/image/get/info'}/${id}`;
    return this.http.get(url);
  } 
}
