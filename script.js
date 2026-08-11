// clock
function updateClock() {
  let now = new Date();

  document.getElementById("clock").innerText = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: "true",
  });
}
updateClock();
setInterval(updateClock, 1000);

// date
function updateTime() {
  let today = new Date();
  document.getElementById("Date").innerText = today.toLocaleDateString();
}
updateTime();
setInterval(updateClock, 1000);

// weather
// let temperature = 32;
// document.getElementById("temperature").innerText = temperature + "\u00b0c";
// document.getElementById("Condition").innerText = "Partly Cloudy";
