'use strict';
let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let countDownDate;
let todayDate;
let interval;
let distanceTime;
let totalSeconds;


function setTime() {
	countDownDate = new Date("Mar 25, 2024, 12:29:22").getTime();
	todayDate = new Date().getTime();
	 distanceTime = countDownDate - todayDate;
	daysEl.innerHTML = Math.floor(distanceTime / (1000 * 60 * 60 * 24));
	hoursEl.innerHTML = Math.floor(distanceTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	minutesEl.innerHTML = Math.floor(distanceTime % (1000 * 60 * 60) / (1000 * 60));
	secondsEl.innerHTML = Math.floor(distanceTime % (1000 * 60) / 1000);
}

function startTimer() {
	interval = setInterval(() => {
		setTime();
		//
		// if (distanceTime === 0) {
		// 	stopTimer()
		// }
	}, 1000);
}
// function stopTimer() {
// 	// interval = clearInterval(interval);
// 	// countDownDate = new Date("Mar 25, 2024, 12:22:22").getTime();
// 	// daysEl.innerHTML =0;
// 	// hoursEl.innerHTML = 0;
// 	// minutesEl.innerHTML = 0;
// 	// secondsEl.innerHTML = 0;
// }

document.addEventListener("DOMContentLoaded", startTimer);
