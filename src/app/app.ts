import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { StarBg } from "./components/star-bg/star-bg";
import { Footer } from "./components/footer/footer";

interface Star {
  top: string;
  left: string;
  size: string;
  animation: string;
  opacity: number;
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, StarBg, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
