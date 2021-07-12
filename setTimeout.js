class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
  }

  start() {
  const days = document.querySelector(`${this.selector} [data-value="days"]`);
  const hours = document.querySelector(`${this.selector} [data-value="hours"]`);
  const mins = document.querySelector(`${this.selector} [data-value="mins"]`);
  const secs = document.querySelector(`${this.selector} [data-value="secs"]`);

    this.intervalId = setInterval(() => {
    const dateNow = Date.now();
      const time = this.targetDate - dateNow;
      console.log(time);
      if (time < 1000) {
        clearInterval(this.intervalId)
      }
      
      days.textContent = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
      hours.textContent = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      mins.textContent = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      secs.textContent = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
  }, 1000
 
  )
 }

};

// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
// const secs = Math.floor((time % (1000 * 60)) / 1000);

const moduleTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('01:12 Jul 25, 2021'),
});

moduleTimer.start();

