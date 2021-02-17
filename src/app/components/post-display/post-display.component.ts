import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner';
import { PhotoModel } from 'src/app/models/photo.model';
import { PhotosService } from 'src/app/services/photos.service';

// Model
import { PostModel } from '../../models/post.model';
import { UserModel } from '../../models/user.model';

// Service
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  posts: PostModel[];
  photos: PhotoModel[];
  users: UserModel[];

  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private photoService: PhotosService,
    private spinner: NgxSpinnerService
  ) {
    this.getPosts()
    // this.getPhotos()
  }

  getPosts() {
    this.spinner.show();
    this.postsService.getPosts()
      .subscribe(
        posts => { this.posts = posts; this.setUserName() },
        err => console.log('HTTP Error', err),
        //() => this.spinner.hide()
      )
    this.usersService.getUsers()
      .subscribe(
        users => { this.users = users; this.setUserName() },
        err => console.log('HTTP Error', err),
        //() => this.spinner.hide()
      )
    // console.log(this.posts)
    this.photoService.getPhotos()
      .subscribe(
        photos => { this.photos = photos; this.setUserName() },
        err => console.log('HTTP Error', err),
        () => this.spinner.hide()
      )

  }



  setUserName() {
    if (this.posts && this.users) {
      for (const post of this.posts) {
        for (const user of this.users) {
          if (post.userId === user.id) {
            post.name = user.name
          }
        }
      }
    }
  }



  ngOnInit() {

  }

}