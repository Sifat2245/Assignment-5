const completeBtns = document.querySelectorAll('.complete-btn');


for(let i = 0; i < completeBtns.length; i++){
    // console.log(completeBtn[i]);
    const completeBtn = completeBtns[i];
    completeBtn.addEventListener('click', function(){
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


    }
    )
}