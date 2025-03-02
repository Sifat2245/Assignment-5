let date = new Date();
const weekDay = date.toLocaleDateString('en-US', {weekday: 'short'})
const month = date.toLocaleDateString('en-US', {month: 'short'})
const day = date.getDate().toString().padStart(2, '0');
const year = date.getFullYear();

document.getElementById('weekday').innerText = weekDay + ',';
document.getElementById('date').innerText = `${month} ${day} ${year}`;
