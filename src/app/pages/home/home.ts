import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, NgStyle } from '@angular/common';
import Typed from 'typed.js';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  text = '';
  longestLength = 0;
  private words = [
    'Full Stack Developer',
    'Mern Stack Developer',
    'Mean Stack Developer',
  ];
  private i = 0;
  private j = 0;
  private isDeleting = false;
  private timeoutId?: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.longestLength = Math.max(...this.words.map((w) => w.length));

    if (this.isBrowser) {
      this.type();
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type(): void {
    const currentWord = this.words[this.i];

    if (this.isDeleting) {
      this.text = currentWord.substring(0, this.j - 1);
      this.j--;
      if (this.j === 0) {
        this.isDeleting = false;
        this.i = (this.i + 1) % this.words.length;
      }
      this.timeoutId = setTimeout(() => this.type(), 100);
    } else {
      this.text = currentWord.substring(0, this.j + 1);
      this.j++;
      if (this.j === currentWord.length) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.type(), 1500); // pause before deleting
        return;
      }
      this.timeoutId = setTimeout(() => this.type(), 100);
    }
  }
}
