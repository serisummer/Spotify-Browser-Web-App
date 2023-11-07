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
  constructor(private service:SpotifyService) { }

  ngOnInit() {
    this.loadProfile();
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  private loadProfile() {
    let promise = this.service.aboutMe();
    promise.then(data => this.name = data.name)
    promise.then(data => this.profile_pic = data.imageURL);
    promise.then(data => this.profile_link = data.spotifyProfile);
    promise.then(data => document.getElementById('name').innerText = 'Logged in user: ' + this.name);
    promise.then(data => document.getElementById('profile_pic').setAttribute('src', this.profile_pic));
    promise.then(data => document.getElementById('profile_link').setAttribute('href', this.profile_link));
  }

}
