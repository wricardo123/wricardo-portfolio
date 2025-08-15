import { Component } from '@angular/core';
import { NgFor, NgClass, NgStyle } from '@angular/common';

interface Star {
  top: string;
  left: string;
  size: string;
  animation: string;
  opacity: number;
}


@Component({
  selector: 'app-star-bg',
  imports: [NgFor, NgClass, NgStyle],
  templateUrl: './star-bg.html',
  styleUrl: './star-bg.css'
})
export class StarBg {
  stars: Star[] = [];

  constructor() {
    const totalStars = 40; // adjust number of stars here
    const animations = ['animate-twinkle', 'animate-twinkleSlow', 'animate-twinkleFast'];

    for (let i = 0; i < totalStars; i++) {
      this.stars.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${1 + Math.random() * 2}px`,
        animation: animations[Math.floor(Math.random() * animations.length)],
        opacity: 0.4 + Math.random() * 0.6
      });
    }
  }
}
