import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faJs, faNodeJs, faReact, faGithub, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { siCplusplus, siGo, siMongodb, siNextdotjs, siAngular, siPostgresql, siMysql, siMacos, siVercel, siSlack, siPostman } from 'simple-icons/icons';


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
    { type: 'fa', icon: faPython },
    { type: 'fa', icon: faJava },
    { type: 'fa', icon: faNodeJs },
    { type: 'si', icon: this.siToDataUrl(siCplusplus) },
    { type: 'si', icon: this.siToDataUrl(siGo) },
    { type: 'si', icon: this.siToDataUrl(siMongodb) },
    { type: 'si', icon: this.siToDataUrl(siNextdotjs) },
    { type: 'si', icon: this.siToDataUrl(siAngular) },
    { type: 'si', icon: this.siToDataUrl(siPostgresql) },
    { type: 'si', icon: this.siToDataUrl(siMysql) },
  ];

  tools = [
    { type: 'si', icon: this.siToDataUrl(siMacos) },
    { type: 'si', icon: this.siToDataUrl(siVercel) },
    { type: 'si', icon: this.siToDataUrl(siSlack) },
    { type: 'si', icon: this.siToDataUrl(siPostman) },
  ]

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
