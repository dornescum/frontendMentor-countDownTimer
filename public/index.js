'use strict';
let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let countDownDate;
let todayDate;
let interval;
let distanceTime;


function setTime() {
	countDownDate = new Date("Mar 25, 2023, 12:47:22").getTime();
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
		// if (distanceTime === 0) {
		// 	stopTimer()
		// }
	}, 1000);
}


document.addEventListener("DOMContentLoaded", startTimer);
