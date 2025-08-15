import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faJs, faNodeJs, faReact, faGithub, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { siWordpress, siPhp, siLaravel, siHtml5, siCss, siMariadb, siGit, siWoo, siJquery, siFigma, siDocker, siApachespark, siMysql } from 'simple-icons/icons'; 
// Note: siApachespark is placeholder for APIs/WebSockets – choose relevant if exists



@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule, NgIf, NgFor, NgClass, NgStyle],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  faRocket = faRocket
    skills = [
    { type: 'fa', icon: faJs },
    { type: 'fa', icon: faReact },
    { type: 'fa', icon: faGithub },
    { type: 'si', icon: this.siToDataUrl(siPhp) },
    { type: 'si', icon: this.siToDataUrl(siWordpress) },
    { type: 'si', icon: this.siToDataUrl(siLaravel) },
    { type: 'si', icon: this.siToDataUrl(siHtml5) },
    { type: 'si', icon: this.siToDataUrl(siCss) },
    { type: 'si', icon: this.siToDataUrl(siJquery) }
  ];

  tools = [
    { type: 'si', icon: this.siToDataUrl(siMariadb) },
    { type: 'si', icon: this.siToDataUrl(siGit) },
    { type: 'si', icon: this.siToDataUrl(siWoo) },        // WooCommerce
    { type: 'si', icon: this.siToDataUrl(siFigma) },
    { type: 'si', icon: this.siToDataUrl(siDocker) },
    // For APIs and WebSockets, you'd need to choose specific icons if available
    // Example placeholder; replace with real Simple Icon name:
    // { type: 'si', icon: this.siToDataUrl(siApis) },
    // { type: 'si', icon: this.siToDataUrl(siWebsockets) },
  ];

  private siToDataUrl(icon: any): string {
    // Inject white fill into the SVG string
    const svg = icon.svg.replace('<svg', `<svg fill="white"`);
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }
months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

// Generate 53 weeks × 7 days
weeks = Array.from({ length: 53 }, () =>
  Array.from({ length: 7 }, () => ({
    commits: Math.floor(Math.random() * 12)
  }))
);

// Map month names to number of weeks they should span
monthSpans = [
  { name: 'Jan', span: 5 },
  { name: 'Feb', span: 4 },
  { name: 'Mar', span: 4 },
  { name: 'Apr', span: 5 },
  { name: 'May', span: 4 },
  { name: 'Jun', span: 4 },
  { name: 'Jul', span: 5 },
  { name: 'Aug', span: 4 },
  { name: 'Sep', span: 4 },
  { name: 'Oct', span: 5 },
  { name: 'Nov', span: 4 },
  { name: 'Dec', span: 5 }
];

getColor(count: number) {
  if (count === 0) return 'bg-[#543D66]'; // noticeable deep violet
  if (count < 3) return 'bg-[#6A2EA8]'; // bold mid-purple
  if (count < 6) return 'bg-[#A347FF]'; // vibrant purple
  if (count < 10) return 'bg-[#C878FF]'; // soft bright lavender
  return 'bg-[#EABFFF]'; // very bright highlight
}

}
