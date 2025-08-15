import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  imports: [FontAwesomeModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {
  faDownload = faDownload

  downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/cv.pdf'; // same path as in src/assets
  link.download = 'Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
}
