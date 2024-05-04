let show = document.querySelector(".show")
let error = document.querySelector(".error")
let plyer01 = document.querySelector(".plyer01")
let input1 = document.querySelector(".input1")
let button1 = document.querySelector(".button1")
let plyer02 = document.querySelector(".plyer02")
let input2 = document.querySelector(".input2")
let button2 = document.querySelector(".button2")



button1.addEventListener("click", () => {
    if (input1.value == '') {
        error.innerHTML = 'number de . r naile toi sorifsorifa'
    } else {
        if (input1.value > 10) {
            error.innerHTML = 'are mofiz number 10 er besi dewa ruls er bayre'
        } else {
            error.innerHTML = ''
            plyer01.style = 'display: none';
            show.innerHTML = 'Plyer 02'
            plyer02.style = 'display:block;'
        }
    }
})

button2.addEventListener("click", () => {
    if (input2.value == '') {
        error.innerHTML = 'number de . r naile toi sorifsorifa'
    }else{
        if (input2.value > 10) {
            error.innerHTML = 'are mofiz number 10 er besi dewa ruls er bayre'
        }else {
            error.innerHTML = ''
            if(input2.value == input1.value){
                show.innerHTML = 'Winer is Plyer 2'
            }else{ show.innerHTML = 'Winer is Plyer 1'}
        }
    }
})
