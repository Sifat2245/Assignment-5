let date = new Date();
let formatedDate = date.toDateString();
const todayDate = document.getElementById('today-date');
const newDateP = document.createElement('p');
newDateP.innerText = formatedDate;
todayDate.append(newDateP)
newDateP.style.fontSize = "20px"
newDateP.style.fontWeight = "700"