const personName = document.getElementById("name")
const time = document.getElementById("time")
const place = document.getElementById("place")

const confirmButton = document.getElementById("conf")
const convertButton = document.getElementById("conv")

const regExp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/
const eventName = prompt("Enter your event name:", "meeting")

if(eventName !== null) {
    document.getElementById("form_box").style.display = "block"
}

function validate() {
    let res = true;

    if (personName.value === "" ||
        time.value === "" ||
        place.value === "") {
        alert("Input all data")
        res = false
    }
    if (!regExp.test(time.value)) {
        alert("Enter time in format hh:mm")
        res = false;
    }

    return res;
}


confirmButton.onclick = () => {
    if(validate()) {
        console.log(`${personName.value} has a ${eventName} today at ${time.value} somewhere in ${place.value}`)
    }
}

convertButton.onclick = () => {
    const euroCurse = 33.52;
    const dollarCurse = 27.76;

    let euro = +prompt("Amount of euro")
    let dollar = +prompt("Amount of euro")

    if (isNaN(euro) || isNaN(dollar) || euro < 0 || dollar < 0) {
        alert("Invalid data")
        return
    }

    let a = `${euro} euros are equal ${(euro * euroCurse).toFixed(2)}hrns`
    let b = `${dollar} euros are equal ${(dollar * dollarCurse).toFixed(2)}hrns`

    alert(a + ', ' + b)
}