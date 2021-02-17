import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AlbumModel } from '../models/album.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class AlbumsService {
  private albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums?_start=0&_limit=8'
  constructor(
    private http: HttpClient
  ) { }

  // getAlbums(): Observable<AlbumModel[]>{
  //   return this.http.get<AlbumModel[]>(this.albumsUrl)
  // }
  async getAlbums() {
    try {
      const data = await this.http.get('https://jsonplaceholder.typicode.com/albums').toPromise();
      return data;
    } catch (error) {
      console.log(error);
     }
  }

  /**
   * Get photos by albumId from jsonplaceholder API
   * @param albumId - number
   */
  async getPhotos(albumId) {
    try {
      const data = await this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).toPromise();
      return data;
    } catch (error) {
      console.log(error);
     }
  }
  
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(`Status : ${error.status}, ` + `Response : ${error.error}`);
    }
    return throwError("Something want wrong. please try again later.");
  }

}