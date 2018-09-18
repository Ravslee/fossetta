import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'About me', 
      description: 'About the designer ', 
      // image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'about'
    })
  }

}
