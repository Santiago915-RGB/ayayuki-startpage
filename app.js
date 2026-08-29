// clock function
//

const hourElement = document.getElementById('clock-hour');
const minuteElement = document.getElementById('clock-minute');
const dayElement = document.getElementById("date-day");
const monthElement = document.getElementById("date-month");
const yearElement = document.getElementById("date-year");
function updateClock() {
	const now = new Date();
	minuteElement.textContent = String(now.getMinutes()).padStart(2, '0');
	hourElement.textContent = String(now.getHours()).padStart(2, '0');
	dayElement.textContent = String(now.getDate()).padStart(2, '0');
	monthElement.textContent = String(now.getMonth() + 1).padStart(2, '0');
	yearElement.textContent = String(now.getFullYear()).padStart(2, '2');
	setTimeout(updateClock, 1000 - (Date.now() % 1000)); 
}
updateClock();

// threads function !!!
//focus on making the json file a js file
//
const ncopy = document.getElementById("ñ-copy");

//ncopy.addEventListener("click", () => {writeClipboardText("ñ")});

async function writeClipboardText(text) {
  try {
	await navigator.clipboard.writeText(text);
  } catch (error) {
	console.log(error.message);
  }
}
