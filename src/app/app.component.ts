import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'quythanhpubs-frontend';
  private idleTimeout = 5 * 60 * 1000; // 5 minutes in milliseconds
  private timer: any;
  visible: boolean = false
  constructor() {
    this.startTimer();
  }
  startTimer(): void {
    this.timer = setTimeout(() => {
      this.showAlert();
    }, this.idleTimeout);
  }

  resetTimer(): void {
    clearTimeout(this.timer);
    this.startTimer();
  }
  showAlert(): void {
    this.visible = true;
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:keydown', ['$event'])
  onUserActivity(event: Event): void {
    this.resetTimer();
  }
}
