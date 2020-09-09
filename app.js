const count = document.querySelector('.count');
const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) => {
    btn.addEventListener('click', function () {

        if(btn.classList.contains('increase')){
            count.textContent++;
        }
        else if(btn.classList.contains('decrease')){
            count.textContent--
        }
        else{
            count.textContent='0'
        }

        let value = count.textContent
        if(value > 0){
            count.style.color='green'
        }
        else if(value < 0){
            count.style.color='red'
        }
        else{
            count.style.color='black'
        }
    })
})

