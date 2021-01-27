const arrayRefs = document.querySelectorAll(".value");

setInterval(() => {
  const newDate = new Date("Feb 07, 2021");
  const currentDate = Date.now();
  const delta = newDate.getTime() - currentDate;

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((delta % (1000 * 60)) / 1000);

  arrayRefs[0].textContent = days.toString().padStart(2, "0");
  arrayRefs[1].textContent = hours.toString().padStart(2, "0");
  arrayRefs[2].textContent = mins.toString().padStart(2, "0");
  arrayRefs[3].textContent = secs.toString().padStart(2, "0");
}, 1000);
