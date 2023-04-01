let btn = document.querySelector('.Button_change')
let inputs = document.querySelectorAll('input#blue')
let h1 = document.querySelectorAll('h1')
let act = document.querySelector('active')
let img = document.querySelectorAll('.img img')
let p = document.querySelectorAll('.pool p')

 btn.onclick = () => {

    inputs.forEach(inp => {
        h1.forEach(red => {
            if (inp.value === '') {
                inp.style.border = '2px solid red'
                inp.parentNode.previousSibling.previousSibling.style.color = 'red'
                inp.nextSibling.nextSibling.firstChild.classList.add('active_err')
            }
            else {
                inp.style.borderColor = 'green'
                inp.parentNode.previousSibling.previousSibling.style.color = 'blue'
                inp.nextSibling.nextSibling.firstChild.classList.remove('active_err')

            }
        })
    })  
}

