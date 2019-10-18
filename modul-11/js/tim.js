// 'use strict';

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  get deadLineFormat() {
    return new Date(Date.parse(this.targetDate));
  }

  getTimeRemaining() {
    const t = Date.parse(this.deadLineFormat) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  initializeClock() {
    const clock = document.getElementById(this.selector);
    const daysSpan = clock.querySelector('[data-value="days"]');
    const hoursSpan = clock.querySelector('[data-value="hours"]');
    const minutesSpan = clock.querySelector('[data-value="mins"]');
    const secondsSpan = clock.querySelector('[data-value="secs"]');

    const updateClock = () => {
      const t = this.getTimeRemaining(this.deadLineFormat);

      daysSpan.textContent = t.days;
      hoursSpan.textContent = ('0' + t.hours).slice(-2);
      minutesSpan.textContent = ('0' + t.minutes).slice(-2);
      secondsSpan.textContent = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    };

    updateClock();
    const timeinterval = setInterval(updateClock, 2000);
  }
}

const timer1 = new CountdownTimer('timer-1', '2019/10/20');
const timer2 = new CountdownTimer('timer-2', '2019/11/20');

timer1.initializeClock();
timer2.initializeClock();

// function getTimeRemaining(endtime) {
//   const t = Date.parse(endtime) - Date.parse(new Date());
//   const seconds = Math.floor((t / 1000) % 60);
//   const minutes = Math.floor((t / 1000 / 60) % 60);
//   const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     total: t,
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// function initializeClock(id, endtime) {
//   const clock = document.getElementById(id);
//   const daysSpan = clock.querySelector('[data-value="days"]');
//   const hoursSpan = clock.querySelector('[data-value="hours"]');
//   const minutesSpan = clock.querySelector('[data-value="mins"]');
//   const secondsSpan = clock.querySelector('[data-value="secs"]');

//   function updateClock() {
//     const t = getTimeRemaining(endtime);

//     daysSpan.textContent = t.days;
//     hoursSpan.textContent = ('0' + t.hours).slice(-2);
//     minutesSpan.textContent = ('0' + t.minutes).slice(-2);
//     secondsSpan.textContent = ('0' + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock();
//   const timeinterval = setInterval(updateClock, 1000);
// }

// const deadLine = '2019/12/10';
// const deadLineFormat = new Date(Date.parse(deadLine));

// initializeClock('timer-1', deadLineFormat);
// ================
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
// class CountdownTimer {
//   constructor({
//     seconds = 0,
//     minutes = 0,
//     hours = 0,
//     days = 0,
//     t,
//     dead = '0',
//   }) {
//     this.seconds = seconds;
//     this.minutes = minutes;
//     this.hours = hours;
//     this.days = days;
//     this.t = t;
//     this.dead = dead;
//   }

//   getTimeRemaining(endtime) {
//     this.t = Date.parse(endtime) - Date.parse(new Date());
//     this.seconds = Math.floor((t / 1000) % 60);
//     this.minutes = Math.floor((t / 1000 / 60) % 60);
//     this.hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     this.days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//       total: t,
//       days: days,
//       hours: hours,
//       minutes: minutes,
//       seconds: seconds,
//     };
//   }

//   initializeClock(id, endtime) {
//     const clock = document.getElementById(id);
//     const daysSpan = clock.querySelector('[data-value="days"]');
//     const hoursSpan = clock.querySelector('[data-value="hours"]');
//     const minutesSpan = clock.querySelector('[data-value="mins"]');
//     const secondsSpan = clock.querySelector('[data-value="secs"]');

//     function updateClock() {
//       const t = getTimeRemaining(endtime);

//       daysSpan.textContent = t.days;
//       hoursSpan.textContent = ('0' + t.hours).slice(-2);
//       minutesSpan.textContent = ('0' + t.minutes).slice(-2);
//       secondsSpan.textContent = ('0' + t.seconds).slice(-2);

//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//       }
//     }

//     updateClock();
//     const timeinterval = setInterval(updateClock, 1000);
//   }
//   fas() {
//     this.deadLine = '2019/12/10';
//     this.deadLineFormat = new Date(Date.parse(deadLine));
//   }
//   initializeClock(timer, deadLineFormat) {
//     console.log(deadLineFormat);
//   }
// }
// class CountdownTimer {
//   constructor(seconds = 0, minutes = 0, hours = 0, days = 0, t, dead = '0') {
//     this.seconds = seconds;
//     this.minutes = minutes;
//     this.hours = hours;
//     this.days = days;
//     this.t = t;
//     // this.dead = dead;
//     this.getTimeRemaining = this.getTimeRemaining.bind(this);
//   }

//   getTimeRemaining(endtime) {
//     this.t = Date.parse(endtime) - Date.parse(new Date());
//     this.seconds = Math.floor((this.t / 1000) % 60);
//     this.minutes = Math.floor((this.t / 1000 / 60) % 60);
//     this.hours = Math.floor((this.t / (1000 * 60 * 60)) % 24);
//     this.days = Math.floor(this.t / (1000 * 60 * 60 * 24));
//     return {
//       total: this.t,
//       days: this.days,
//       hours: this.hours,
//       minutes: this.minutes,
//       seconds: this.seconds,
//     };
//   }

//   initializeClock(id, endtime) {
//     const clock = document.getElementById(id);
//     const daysSpan = clock.querySelector('[data-value="days"]');
//     const hoursSpan = clock.querySelector('[data-value="hours"]');
//     const minutesSpan = clock.querySelector('[data-value="mins"]');
//     const secondsSpan = clock.querySelector('[data-value="secs"]');

//     const updateClock = () => {
//       const t = this.getTimeRemaining(endtime);

//       daysSpan.textContent = t.days;
//       hoursSpan.textContent = ('0' + t.hours).slice(-2);
//       minutesSpan.textContent = ('0' + t.minutes).slice(-2);
//       secondsSpan.textContent = ('0' + t.seconds).slice(-2);

//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//       }
//     };

//     updateClock();
//     const timeinterval = setInterval(updateClock, 1000);
//   }
// }

// const clock = new CountdownTimer();
// const deadLine = '2019/12/10';
// const deadLineFormat = new Date(Date.parse(deadLine));
// clock.initializeClock('timer-1', deadLineFormat);

// const count = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
