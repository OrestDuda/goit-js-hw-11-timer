class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
  }
  insertDate() {
    setInterval(() => {
      let currentDate = Date.now();
      let delta = this.targetDate - currentDate;
      let days = Math.floor(delta / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((delta % (1000 * 60)) / 1000);
      let refs = document.querySelectorAll(this.selector);
      refs[0].textContent = days.toString().padStart(2, "0");
      refs[1].textContent = hours.toString().padStart(2, "0");
      refs[2].textContent = mins.toString().padStart(2, "0");
      refs[3].textContent = secs.toString().padStart(2, "0");
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: ".value-class",
  targetDate: new Date("Mar 17, 2021"),
});

timer.insertDate();
