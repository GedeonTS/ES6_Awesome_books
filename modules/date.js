import { DateTime } from "./luxon.js";

const DateSection = document.querySelector('.date');
const dateTime = () => {
  const dt = DateTime.now();
  let months = ["January", "February", "March", "April", "May", "June", "July", "Septempber", "October", "November", "December"];
  let month = months[dt.month - 1];
  let day = dt.day;
  let th;
  if (day==1||day==21||day==31) {
     th = "st";
  } else if (day == 2 || day == 22 ) {
    th = "nd";
  } else if (day == 3 || day == 23) {
    th = "rd";
  } else {
    th = "th";
  }
  DateSection.innerHTML = `<p>${day}${th} ${month} ${dt.year} ${dt.hour}:${dt.minute}:${dt.second}</p>`;
};

export default dateTime;
