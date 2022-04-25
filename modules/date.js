import { DateTime } from '../node_modules/luxon/src/luxon.js';

const DateSection = document.querySelector('.date');
const dateTime = () => {
  const dt = DateTime.now();
  DateSection.innerHTML = `<p>${dt.year}:${dt.day}:${dt.month} ${dt.hour}:${dt.minute}:${dt.second}</p>`;
};

export default dateTime;
