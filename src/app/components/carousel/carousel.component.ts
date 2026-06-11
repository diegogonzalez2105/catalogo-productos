import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() images: string[] = [];
  @Input() alt = '';
  currentIndex = signal(0);

  prev(): void {
    this.currentIndex.update(i => (i - 1 + this.images.length) % this.images.length);
  }

  next(): void {
    this.currentIndex.update(i => (i + 1) % this.images.length);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}