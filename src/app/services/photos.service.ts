import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { PhotoModel } from '../models/photo.model';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class PhotosService {
  private photosUrl: string = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=8';
  constructor(
    private http: HttpClient
  ) { }

  getPhotos(): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(this.photosUrl)
  }

  async getPhotosId(albumId) {
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