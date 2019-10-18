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
