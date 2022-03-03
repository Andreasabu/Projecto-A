import { Component } from '@angular/core';
import { FooterInterface } from './core/models/footer.model';
import { HeaderInterface } from './core/models/header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tienda';

  public header: HeaderInterface[] = [
    {
      name: "Home",
      link: "/home"
    },
    {
      name: "Products",
      link: "/product-list"
    },
    {
      name: "Settings",
      link: "/product-form"
    }
  ]

  public footer: FooterInterface[] = [
    {
      name: "twitter",
      link: "https://twitter.com/",
      
    },
    {
      name: "facebook",
      link: "www.facebook.com"
    },
    {
      name: "instagram",
      link: "www.instagram.com"
    },
    {
      name: "tik-tok",
      link: "www.tik-tok.com"
    },

  ]
}
