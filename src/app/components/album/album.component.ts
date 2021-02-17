import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PhotoModel } from 'src/app/models/photo.model';
import { UserModel } from 'src/app/models/user.model';
import { PhotosService } from 'src/app/services/photos.service';
import { UsersService } from 'src/app/services/users.service';

// Model
import { AlbumModel } from '../../models/album.model';

// Service
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  //albums: AlbumModel[];
  photos: PhotoModel[];
  users: UserModel[];

  filteredAlbums;
  albums;

  
  constructor(
    private albumsService: AlbumsService,
    private usersService: UsersService,
    private photoService: PhotosService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    //this.getAlbums()
    // this.getPosts()
    this.fetchData()
  }
  

  filterAlbums(searchString: string) {
    return this.albums.filter(album =>
      album.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  private fetchData() {
    this.spinner.show();
    const promise = this.albumsService.getAlbums();
    promise.then((data) => {
      this.albums = data;
      this.filteredAlbums = this.albums;
    }).catch((error) => {
      console.log(JSON.stringify(error));
    }).finally(() => {
      this.spinner.hide();
    });
  }

  setUserName() {
    if (this.photos && this.users) {
      for(const photo of this.photos) {
        for(const user of this.users) {
          for(const album of this.albums) {
          if (photo.albumId === user.id) {
            photo.albumId = album.id
            }
          }
        }
      }
    }
  }



}