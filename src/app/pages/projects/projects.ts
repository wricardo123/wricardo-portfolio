import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  faGithub = faGithub;
  faDisplay = faDisplay;

  projects = [
    {
      name: 'RAA Investments',
      desc: 'A modern web application designed to showcase sleek UI, smooth animations, and responsive layouts. Built with a focus on performance, accessibility, and clean code, this project demonstrates the integration of cutting-edge technologies with a user-friendly experience.',
      demo: 'https://raainvestments.com/',
      github: 'https://github.com/wricardo123',
      image: 'project1.PNG',
    },
    {
      name: 'Dumpster Dad',
      desc: 'A modern web application designed to showcase sleek UI, smooth animations, and responsive layouts. Built with a focus on performance, accessibility, and clean code, this project demonstrates the integration of cutting-edge technologies with a user-friendly experience.',
      demo: 'https://dumpsterdad321.com/',
      github: 'https://github.com/wricardo123',
      image: 'project2.PNG',
    },
    {
      name: 'Turn Table',
      desc: 'A modern web application designed to showcase sleek UI, smooth animations, and responsive layouts. Built with a focus on performance, accessibility, and clean code, this project demonstrates the integration of cutting-edge technologies with a user-friendly experience.',
      demo: 'https://turntable.ae/',
      github: 'https://github.com/wricardo123',
      image: 'project3.PNG',
    },
    {
      name: 'Football DXB',
      desc: 'A modern web application designed to showcase sleek UI, smooth animations, and responsive layouts. Built with a focus on performance, accessibility, and clean code, this project demonstrates the integration of cutting-edge technologies with a user-friendly experience.',
      demo: 'https://www.footballdxb.com/?currency=AED',
      github: 'https://github.com/wricardo123',
      image: 'project4.PNG',
    },
    {
      name: 'JC Club',
      desc: 'A modern web application designed to showcase sleek UI, smooth animations, and responsive layouts. Built with a focus on performance, accessibility, and clean code, this project demonstrates the integration of cutting-edge technologies with a user-friendly experience.',
      demo: 'https://jcclubmcr.com/',
      github: 'https://github.com/wricardo123',
      image: 'project5.PNG',
    },
  ];
}
