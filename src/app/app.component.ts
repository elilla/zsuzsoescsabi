import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zsuzsoescsabi';
  days: number | undefined;
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;
  distance: number | undefined;

  imageCounter: number = 0;

  ngOnInit() {
    const countDownDate = new Date("Jul 9, 2022 15:30:00").getTime();

    setInterval(() => {
      const now = new Date().getTime();
      this.distance = countDownDate - now;
      if (this.distance < 0) {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        return;
      }
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

      if (this.seconds % 5 === 0) {
        this.imageCounter === 3 ? this.imageCounter = 0 : this.imageCounter = this.imageCounter + 1;
      }
    }, 1000);
  }
}
