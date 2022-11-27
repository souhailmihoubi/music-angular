import { Album } from "./album.model";

export class Song{
    idSong! : number;
    songName! : string;
    featuring! : string;
    duration! : number;
    album! : Album;
}