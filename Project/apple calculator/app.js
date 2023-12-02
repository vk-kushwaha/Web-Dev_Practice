
let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let string = "";

let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (event) => {

        if (event.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (event.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (event.target.innerHTML == 'C') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += event.target.innerHTML;
            input.value = string;
        }


    })
})