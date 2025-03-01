const completeBtns = document.querySelectorAll('.complete-btn');
const activityTaskContainer = document.getElementById('task-message-container')

for (let i = 0; i < completeBtns.length; i++) {
    // console.log(completeBtn[i]);
    const completeBtn = completeBtns[i];
    completeBtn.addEventListener('click', function () {
        alert('Board updated Successfully');
        let taskDecrease = document.getElementById('task-decreased').innerText;
        let countedDecrease = parseInt(taskDecrease)
        let taskIncrease = document.getElementById('task-increased').innerText;
        let countedIncrease = parseInt(taskIncrease);


        countedDecrease = taskDecrease - 1;
        document.getElementById('task-decreased').innerText = countedDecrease;

        let count = countedIncrease;
        count++;
        // console.log(count);
        document.getElementById('task-increased').innerText = count;

        completeBtn.setAttribute('disabled', true);
        completeBtn.style.backgroundColor = '#a2adf5'
        if (countedDecrease === 0) {
            alert('congrats!!! You have completed all the current task')
        }

        let heading = completeBtn.closest('.task-card');
        if (heading) {
            const h1 = heading.querySelector('h1').innerText;
            // console.log(h1)
            let taskMessagep = document.createElement('p');
            let time = new Date();
            let formatedTime = time.toLocaleTimeString();
            taskMessagep.innerText = `you have completed the task ${h1} at ${formatedTime}`
            // console.log(taskMessagep);
            taskMessagep.classList.add('message')
            activityTaskContainer.appendChild(taskMessagep)
        }

    }
    )
}

document.getElementById('clear-history-btn').addEventListener('click', function () {
    activityTaskContainer.innerHTML = '';
})

// random color in the body..

document.getElementById('bg-theme').addEventListener('click', function () {

    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomColor = '#' + randomNumber.toString(16);

    document.body.style.backgroundColor = randomColor;
})


document.getElementById('discover-tab').addEventListener('click', function(){
    window.location.href='./blog.html'
})
