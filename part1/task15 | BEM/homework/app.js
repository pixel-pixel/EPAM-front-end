

const addTweetHTML = '<div id="alertMessage" class="hidden"><span id="alertMessageText"></span></div>\n' +
    '\t\t<div id="tweetItems" class="listPage">\n' +
    '\t\t\t<h1>Simple Twitter</h1>\n' +
    '\t\t\t<div id="navigationButtons">\n' +
    '\t\t\t\t<button class="addTweet">Add tweet</button>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<ul id="list"></ul>\n' +
    '\t\t</div>\n' +
    '\t\t<div id="modifyItem" class="hidden">\n' +
    '\t\t\t<h1 id="modifyItemHeader">Edit tweet</h1>\n' +
    '\t\t\t<textarea id="modifyItemInput"></textarea>\n' +
    '\t\t\t<div class="formButtons">\n' +
    '\t\t\t\t<button id="cancelModification">Cancel</button>\n' +
    '\t\t\t\t<button id="saveModifiedItem">Save Changes</button>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>'

const root = document.getElementById('root');
const tweetItems = document.getElementById('tweetItems')
const modifyItems = document.getElementById('modifyItem')
const addTweet = document.querySelector('#navigationButtons button')
const input = document.getElementById('modifyItemInput')
const cancel = document.getElementById('cancelModification')
const save = document.getElementById('saveModifiedItem')

const list = document.getElementById('list')

const tweetContainer = document.getElementById('tweet-container')

updateTweets()

addTweet.addEventListener('click', editPage)

cancel.addEventListener('click', mainPage)

save.addEventListener('click', () => {
    const t140 = 140
    if (modifyItems.tweet !== '') {
        if (localStorage.getItem(modifyItems.tweet) === null && input.value.length <= t140) {
            localStorage.setItem(modifyItems.tweet, input.value)
            mainPage()
        } else {
            alert('no it is not a kek')
        }
    }
})

function mainPage() {
    tweetItems.style.visibility = 'visible'
    tweetItems.style.position = 'static'

    modifyItems.style.visibility = 'hidden'
    updateTweets()
}

function editPage(tweetNumber) {
    if(tweetNumber === undefined) {
        tweetNumber = localStorage.length + ''
    } else {
        tweetNumber += ''
    }

    tweetItems.style.visibility = 'hidden'
    tweetItems.style.position = 'absolute'

    modifyItems.style.visibility = 'visible'
    modifyItems.tweet = tweetNumber
    modifyItems.getElementsByTagName('h1')[0].textContent = 'Add tweet'

    input.value = localStorage.length >= modifyItems.tweet ? localStorage[modifyItems.tweet] : ''
}

function updateTweets() {
    tweetContainer.innerHTML = ''

    Object.keys(localStorage).forEach(key => {
        tweetContainer.appendChild(createTweet(localStorage[key]))
    })
}

function createTweet(text) {
    const article = document.createElement('article')
    article.classList.add('tweet')

    const header = document.createElement('header')
    const icon = document.createElement('img')
    icon.setAttribute('src', 'pics/icon.jpg')
    icon.setAttribute('alt', 'icon')
    const name = document.createElement('h3')
    name.textContent = 'Andrew Bartish'
    header.append(icon, name)
    article.appendChild(header)

    const tweetText = document.createElement('p')
    tweetText.textContent = text
    article.appendChild(tweetText)

    const footer = document.createElement('footer')
    const like = document.createElement('img')
    like.setAttribute('src', 'pics/like.svg')
    like.addEventListener('click', () => {
        if(like.getAttribute('src') === 'pics/like.svg') {
            like.setAttribute('src', 'pics/unlike.svg')
        } else {
            like.setAttribute('src', 'pics/like.svg')
        }
    })
    const edit = document.createElement('img')
    edit.setAttribute('src', 'pics/edit.svg')
    const remove = document.createElement('img')
    remove.setAttribute('src', 'pics/delete.svg')
    remove.addEventListener('click', () => {
        tweetContainer.removeChild(article)
        localStorage.removeItem(text)
    })
    footer.append(like, edit, remove)
    article.appendChild(footer)

    return article
}

