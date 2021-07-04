function reverseNumber(num) {
    let res = ''

    if (num < 0) {
        res = '-'
        num *= -1
    }

    num += ''

    for (let i = num.length - 1; i >= 0; i--) {
        res += num[i]
    }

    return +res
}

function forEach(arr, func) {
    for (let temp of arr) {
        func(temp)
    }
}

function map(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i])
    }
    return arr;
}

function filter(arr, func) {
    let res = []
    forEach(arr, el => {
        if (func(el)) {
            res.push(el)
        }
    })
    return res
}

function getAdultAppleLovers(data) {
    let res;
    res = filter(data, el => el.age > 18 && el.favoriteFruit === 'apple')
    res = map(res, el => el.name)
    return res
}

function getKeys(obj) {
    let res = []
    for (let key in obj) {
        res.push(key)
    }
    return res
}

function getValues(obj) {
    let res = []
    for (let key in obj) {
        res.push(obj[key])
    }
    return res
}

function showFormattedDate(dateObj) {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return `It is ${dateObj.getDate()} of ${MONTHS[dateObj.getMonth()]}, ${dateObj.getFullYear()}`
}
