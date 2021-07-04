function isEquals(a, b) {
    return a === b
}

function isBigger(a, b) {
    return a > b
}

function storeNames(...names) {
    let res = []
    for (let temp of names) {
        res.push(temp)
    }
    return res
}

function getDifference(a, b) {
    let res = a - b;
    if(res < 0) {
        res *= -1
    }
    return res
}

function negativeCount(arr) {
    let res = 0
    for(let temp of arr) {
        temp < 0 ? res++ : res
    }
    return res
}

function letterCount(str, letter) {
    let res = 0;

    str = str.toLowerCase()
    letter = letter.toLowerCase()

    for(let temp of str) {
        temp === letter ? res++ : res
    }
    return res
}

function countPoints(arr) {
    let res = 0

    let a
    let b
    for(let score of arr) {
        a = +score.split(':')[0]
        b = +score.split(':')[1]

        if(a > b) {
            res += 3
        } else if(a === b) {
            res += 1
        }
    }
    return res
}