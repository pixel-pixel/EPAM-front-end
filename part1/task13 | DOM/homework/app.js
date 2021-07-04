const appRoot = document.getElementById('app-root');
const header = document.createElement('header')
const h1 = document.createElement('h1')

const form = document.createElement('form')

const field1 = document.createElement('fieldset')
const label1 = document.createElement('label')
const radioRegion = document.createElement('input')
const labelRegion = document.createElement('label')
const radioLanguage = document.createElement('input')
const labelLanguage = document.createElement('label')

const field2 = document.createElement('fieldset')
const label2 = document.createElement('label')
const select = document.createElement('select')


h1.append('Countries Search')
header.append(h1)

appRoot.append(header)
createForm()

radioRegion.onclick = () => {
    setSelectList(externalService.getRegionsList())
}

radioLanguage.onclick = () => {
    setSelectList(externalService.getLanguagesList())
}

function setSelectList(list) {
    let option;

    select.innerHTML = ''
    option = document.createElement('option')
    option.textContent = 'Select value'
    select.append(option)

    if (list) {
        select.disabled = false

        list.forEach(el => {
            option = document.createElement('option')
            option.textContent = el
            option.value = el
            select.append(option)
        })
    }
}

function createForm() {
    label1.textContent = 'Please choose the type of search:'

    radioRegion.type = 'radio'
    radioRegion.name = 'field1'
    radioRegion.value = 'reg'
    labelRegion.textContent = 'By Region'
    labelRegion.prepend(radioRegion)

    radioLanguage.type = 'radio'
    radioLanguage.name = 'field1'
    radioLanguage.value = 'lang'
    labelLanguage.textContent = 'By Language'
    labelLanguage.prepend(radioLanguage)

    label2.textContent = 'Please choose search query:'
    select.name = 'select'
    select.disabled = true
    setSelectList()

    field1.append(label1, labelRegion, labelLanguage)
    field2.append(label2, select)
    form.append(field1, field2)
    header.append(form)
}

