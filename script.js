"use strict";

setInterval(() => {
  let actualHour = new Date().getHours().toString().padStart(2, "0");
  let actualMinute = new Date().getMinutes().toString().padStart(2, "0");
  let actualSecond = new Date().getSeconds().toString().padStart(2, "0");
  let actualTime = `${actualHour}:${actualMinute}:${actualSecond}`;

  let day = new Date().getDate().toString().padStart(2, "0");
  let month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  let year = new Date().getFullYear();
  let actualDate = `${day}/${month}/${year}`;

  document.getElementById("time").innerHTML = actualTime;

  document.getElementById("date").innerHTML = actualDate;
}, 1000);
