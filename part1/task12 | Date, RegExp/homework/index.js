const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
const MONTH_SMALL = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function getAge(birth) {
    const msPerYear = 31536000000
    return Math.floor((Date.now() - birth) / msPerYear)
}

function getWeekDay(date) {
    date = typeof date === 'number' ? new Date(date) : date
    return DAYS[date.getDay()]
}

function getAmountDaysToNewYear() {
    const msPerDay = 86400000
    const now = new Date()
    const ny = new Date(now.getFullYear() + 1, 0, 1)

    return Math.floor((ny - now) / msPerDay)
}

function getProgrammersDay(year) {
    const programmerDay = 256
    const date = new Date(year, 0, programmerDay)
    return `${date.getDate()} ${MONTH_SMALL[date.getMonth()]}, ${date.getFullYear()} (${getWeekDay(date)})`
}

function howFarIs(dayName) {
    const daysLower = DAYS.map(el => el.toLowerCase())
    const day = daysLower.indexOf(dayName.toLowerCase())
    const dayInWeek = 7

    let res = day - new Date().getDay()

    if (res === 0) {
        return `Hey, today is ${DAYS[day]} =)`
    } else if (res > 0) {
        return `It's ${res} day(s) left till ${DAYS[day]}.`
    } else {
        return `It's ${dayInWeek + res} day(s) left till ${DAYS[day]}.`
    }
}

function isValidIdentifier(val) {
    const valid = /[^0-9][0-9a-z_$]+$/i
    return valid.test(val)
}

function capitalize(str) {
    const capitalFirst = str => str.charAt(0).toUpperCase() + str.slice(1)
    const regex = /\w+\b/gi

    let res = str.match(regex)
    res = res.map(el => capitalFirst(el))

    return res.join(' ')
}

function isValidAudioFile(audio) {
    const regex = /\w+\.(mp3|flac|alac|aac)$/i
    return regex.test(audio)
}

function getHexadecimalColors(style) {
    const regex = /#(([a-f]|\w){3}|([a-f]|\w){6})(;|$)/ig

    let res = style.match(regex)
    res = res ? res : []

    return res.map(el => el.replace(';', ''))
}

function isValidPassword(pass) {
    const up = /[A-Z]/
    const low = /[a-z]/
    const num = /[0-9]/
    const len = /.{8,}/

    return up.test(pass) && low.test(pass) && num.test(pass) && len.test(pass)
}

function addThousandsSeparators(num) {
    const reverse = el => [...el].reverse().join('')
    const delCome = el => el.charAt(0) === ',' ? el.slice(1) : el
    const regex = /\d{3}/g

    num = num + ''
    num = reverse(num)
    num = num.replace(regex, '$&,')

    return delCome(reverse(num))
}

function getAllUrlsFromText(text) {
    const regex = /\w+:\/\/((\w|\d)+\.(\w|\d)+)+\/(\w|\d)*/g

    if (text === undefined) {
        return new Error()
    }
    let res = text.match(regex)

    return res ? res : []
}