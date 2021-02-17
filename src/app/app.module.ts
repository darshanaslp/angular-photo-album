import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import bootstrap from "bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AboutComponent } from './pages/about/about.component';

import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { PostDisplayComponent } from './components/post-display/post-display.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostCreateComponent } from './components/post-create/post-create.component';

import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { AlbumsService } from './services/albums.service';
import { CommentsService } from './services/comments.service';
import { PhotosService } from './services/photos.service';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    PostsComponent,
    AboutComponent,
    UserComponent,
    PostDisplayComponent,
    AlbumComponent,
    PhotoComponent,
    CommentComponent,
    PostCreateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    PostsService,
    UsersService,
    AlbumsService,
    CommentsService,
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
