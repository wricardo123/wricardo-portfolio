import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  faGithub = faGithub
  faTwitter = faTwitter
  faLinkedin = faLinkedin
  faInstagram = faInstagram
}
