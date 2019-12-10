import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { TVshowsComponent } from './component/tvshows/tvshows.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MovieItemComponent } from './component/movie-item/movie-item.component';
import { TvshowItemComponent } from './component/tvshow-item/tvshow-item.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './component/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    TVshowsComponent,
    MoviesComponent,
    MovieItemComponent,
    TvshowItemComponent,
    HomeComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
       {path: 'tvshows', component: TVshowsComponent},
       {path: 'home', component: HomeComponent},
       {path: 'movies', component: MoviesComponent},
       {path: '', redirectTo: 'home', pathMatch:'full'},
       {path: '**', redirectTo: 'home', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
