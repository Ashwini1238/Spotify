import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  public browserAll = [
    {bgColor: 'red',color: 'white',title: 'Podcasts'},
    { bgColor: 'green', color: 'white', title: 'Made for you' },
    { bgColor: 'purple', color: 'white', title: 'Charts' },
    { bgColor: 'blue', color: 'white', title: 'Live streams' },
    { bgColor: 'pink', color: 'white', title: 'Bollywood' },
    { bgColor: 'lightblue', color: 'white', title: 'Punjabi' },
    { bgColor: 'orange', color: 'white', title: 'Tamil' },
    { bgColor: 'yellow', color: 'white', title: 'Telugu' },
    { bgColor: 'black', color: 'white', title: 'Marathi' },
    { bgColor: 'orangered', color: 'white', title: 'Hip-Hop' },
    { bgColor: 'darkgray', color: 'white', title: 'Workout' },
    { bgColor: 'smokewhite', color: 'white', title: 'R&B' },
  ];
  public songCards = [
    {
      song_id: 1,
      /*thumbnail:'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',*/
      thumbnail:'https://th.bing.com/th/id/OIP.ccFNFBCg0GTODuW1MZHO1gAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Romantic Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: 'C:\Users\ashwi\OneDrive\Desktop\Resume Projects\Spotify\src\assets\dangerous.mp3',
    },
    {
      song_id: 2,
      /*thumbnail:'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',*/
      thumbnail:'https://th.bing.com/th/id/OIP.ccFNFBCg0GTODuW1MZHO1gAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Peaceful Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 3,
      /*thumbnail:'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',*/
      thumbnail:'https://th.bing.com/th/id/OIP.ccFNFBCg0GTODuW1MZHO1gAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'DJ Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 4,
      /*thumbnail:'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',*/
      thumbnail:'https://th.bing.com/th/id/OIP.ccFNFBCg0GTODuW1MZHO1gAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Party Mashup Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 5,
      /*thumbnail:'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',*/
      thumbnail:'https://th.bing.com/th/id/OIP.ccFNFBCg0GTODuW1MZHO1gAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'HeartBreak Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: 'C:\Users\ashwi\OneDrive\Desktop\Resume Projects\Spotify\src\assets\Bezuban.mp3',
    },
    {
      song_id: 6,
      /*thumbnail:'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',*/
      thumbnail:'https://th.bing.com/th/id/OIP.ccFNFBCg0GTODuW1MZHO1gAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Spiritual Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 7,
      /*thumbnail:'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',*/
      thumbnail:'https://th.bing.com/th/id/OIP.ccFNFBCg0GTODuW1MZHO1gAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Religional Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 8,
      /*thumbnail:'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',*/
      thumbnail:'https://th.bing.com/th/id/OIP.ccFNFBCg0GTODuW1MZHO1gAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'English Mashups',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 9,
      /*thumbnail:'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',*/
      thumbnail:'https://th.bing.com/th/id/OIP.ccFNFBCg0GTODuW1MZHO1gAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Motivational Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
  ];
  constructor(public sb: SearchBarService){}
  ngOnIt():void{}
  onInputFilterRes($event:string) {
    const res = this.browserAll.filter(
      (element) => element.title.toLowerCase() === $event.toLowerCase().trim()
    );
    console.log(res);
  }
  onNavigation(pageName: string) {
    if (pageName === 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }
  }
  
}
