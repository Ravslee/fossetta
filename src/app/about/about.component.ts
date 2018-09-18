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
      title: 'I love designing', 
      description: 'A passionate Designer with Creative and Innovative vision; comes from a small town of Rajasthan named Kota. She had receveid her diploma course in fashion designing from Couture Institute of Fashion Techonology in Kota. Her aim is to change the concept of many Indians of looking great only by wearing heavy worked clothes, which is not true according to her , so she brings her vision of creating an unique , simple designs with details like ruffled,pleated,tucked and her designs are embellished with minimal hand or machine work or appliqué that can be worn by everyone. Her style is especially about feeling classy, elegant and sophisticated. She believes in her creation and can design the pallette for women to wear simple, comfortable yet stylish couture. She wants to innovate the power of dressing for women with her figure-loving designs. She also believes that dressing up occasionally and looking perfect is not only goes for women but for men and kids too. So, she also design menswear and kids wear in simple yet stylish and easy going comfortable design.', 
       image: 'https://firebasestorage.googleapis.com/v0/b/fosseta-192915.appspot.com/o/fosseta%2Fmy%2Fauthor.png?alt=media&token=dd5f24be-77c0-4961-ac37-1ee75588d1f9',
      slug: 'about'
    })
  }

}
