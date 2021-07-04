/* START TASK 1: Your code goes here */
const CELLS = [
    [
        document.getElementById('td11'),
        document.getElementById('td12'),
        document.getElementById('td13')
    ], [
        document.getElementById('td21'),
        document.getElementById('td22'),
        document.getElementById('td23')
    ], [
        document.getElementById('td31'),
        document.getElementById('td32'),
        document.getElementById('td33')
    ]
]

CELLS.forEach(arr => {
    arr.forEach(el => {
        el.onclick = () => {
            if(el.style.backgroundColor === '') {
                el.style.backgroundColor = 'yellow'
            } else if (el.style.backgroundColor === 'yellow') {
                el.style.backgroundColor = 'blue'
            } else if (el.style.backgroundColor === 'blue'){
                el.style.backgroundColor = 'green'
            }
        }
    })

    arr[0].onclick = () => {
        if (!arr.find(el => el.style.backgroundColor === 'yellow')) {
            arr.forEach(el => {
                el.style.backgroundColor = 'blue'
            })
        }
    }

    arr.forEach(el => {
        if(el.textContent === 'Special Cell') {
            el.onclick = () => {
                CELLS.forEach(arr => {
                    arr.forEach(el => {
                        el.style.backgroundColor = 'green'
                        document.getElementById('tbl')
                            .style.backgroundColor = 'green'
                    })
                })
            }
        }
    })


})
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const msg = document.getElementById('msg')
const phone = document.getElementById('phone')
const submit = document.getElementById('submit')

const regexNumber = /\+380[0-9]{9}$/

phone.addEventListener('input', () => {
    if (phone.value === '') {
        msg.setStyle({backgroundColor: '#2196f3', border: '#1976d2 solid 3px'})
        msg.textContent = 'Enter your phone number:'
        phone.setStyle({border: 'black solid 3px'})
        submit.disabled = true
    } else if (regexNumber.test(phone.value)) {
        msg.setStyle({backgroundColor: '#4caf50', border: '#2e7d32 solid 3px'})
        msg.textContent = 'You can send'
        phone.setStyle({border: 'black solid 3px'})
        submit.disabled = false
    } else {
        msg.setStyle({backgroundColor: '#f44336', border: '#d32f2f solid 3px'})
        msg.textContent = 'Type number does not follow format +380*********'
        phone.setStyle({border: '#d32f2f solid 3px'})
        submit.disabled = true
    }
})

submit.addEventListener('click', ev => {
    ev.preventDefault()

    msg.setStyle({backgroundColor: '#4caf50', border: '#2e7d32 solid 3px'})
    msg.textContent = 'Data was successfully sent'
    phone.setStyle({border: 'black solid 3px'})
    submit.disabled = false
})

Object.prototype.setStyle = function (style) {
    for (let key in style) {
        if (style.hasOwnProperty(key)) {
            this.style[key] = style[key]
        }
    }
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */
const cort = document.getElementById('task3')
const ball = document.getElementById('ball')
const scoreA = document.getElementById('scoreA')
const scoreB = document.getElementById('scoreB')
const score = document.getElementById('score')
const spaceA = document.getElementById('spaceA')
const spaceB = document.getElementById('spaceB')

const num20 = 20
const num3000 = 3000

cort.addEventListener('click', ev => {
    ball.style.left = ev.layerX - num20 + 'px'
    ball.style.top = ev.layerY - num20 + 'px'
})

cort.addEventListener('goal', ev => {
    score.style.visibility = 'visible'
    score.textContent = `Team ${ev.detail.command} score!`

    if(ev.detail.command === 'A') {
        score.style.color = 'blue'
    } else {
        score.style.color = 'red'
    }

    setTimeout(() => {
        score.style.visibility = 'hidden'
    }, num3000)
})

spaceA.addEventListener('click', () => {
    let arr = scoreB.textContent.split(':')
    arr[1] = +arr[1] + 1
    scoreB.textContent = arr.join(':')

    cort.dispatchEvent(new CustomEvent('goal', {detail: {command: 'B'}}))
})

spaceB.addEventListener('click', () => {
    let arr = scoreA.textContent.split(':')
    arr[1] = +arr[1] + 1
    scoreA.textContent = arr.join(':')

    cort.dispatchEvent(new CustomEvent('goal', {detail: {command: 'A'}}))
})
/* END TASK 3 */
