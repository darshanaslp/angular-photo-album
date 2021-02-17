import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

// Model
import { PhotoModel } from '../../models/photo.model';

// Service
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos;
  albumId;
  filteredPhotos;

  photosal;



   photosAll: PhotoModel[];

  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  getPhotos(): void{
    this.photosService.getPhotos()
      .subscribe(
        photosal => this.photosAll = photosal,
        err => console.error('got an error: ' + err),
        )
  }

  ngOnInit() {
    this.getPhotos(),
    this.fetchData()
  }

  private fetchData() {
    this.spinner.show();
    this.albumId = this.route.snapshot.params.albumId;
    const promise = this.photosService.getPhotosId(this.albumId);
    promise.then((data) => {
      this.photos = data;
      this.filteredPhotos = this.photos;
    }).catch((error) => {
      console.log(JSON.stringify(error));
    }).finally(() => {
      this.spinner.hide();
    });
  }

}