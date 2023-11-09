import { Component, OnInit } from '@angular/core';
import { ProfileData } from 'src/app/data/profile-data';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;

  //TODO: inject the Spotify service
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  loadProfile() {
    let promise = this.spotifyService.aboutMe();
    promise.then(data => this.name = data.name)
    promise.then(data => this.profile_pic = data.imageURL);
    promise.then(data => this.profile_link = data.spotifyProfile);
  }

}
