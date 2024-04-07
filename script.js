const coreLinks = {
  'Identity + Values': '/blog/identity-values.html',
  'Learning Plan': '/blog/learning-plan.html',
  'Emotional Intelligence': '/blog/emotional-intelligence.html',
  Neuroplasticity: '/blog/neuroplasticity.html',
  'Te Whare Tapa Whā': '/blog/te-whare-tapa-wha.html',
}

const techLinks = {
  'HTML-CSS': '/blog/html-css.html',
  'JS Fundamentals': '/blog/javascript-dom.html',
}

const templateLinks = {
  'Te Houtaewa': '/blog/te-houtaewa-template.html',
}

const homeLink = {
  Home: '/joel-cain-allan.github.io/',
}

function addHeader() {
  let body = document.body
  let headerDiv = document.createElement('div')
  headerDiv.id = 'floating-header'

  let headerContentSpan = document.createElement('span')

  let headerImage = document.createElement('img')
  if (getRandomInt(2) > 0) {
    headerImage.src = '/images/archie-head-big.png'
    headerImage.alt = 'apprehensive black-and-tan dog face'
  } else {
    headerImage.src = '/images/cindy-head-big.png'
    headerImage.alt = 'cheeky fluffy yellow dog face'
  }
  headerImage.id = 'dog-head'
  headerImage.width = '150'
  headerImage.height = '150'

  let headerContent = document.createElement('h1')
  headerContent.innerHTML = '.Blog {'

  headerContentSpan.appendChild(headerImage)
  headerContentSpan.appendChild(headerContent)

  headerDiv.appendChild(headerContentSpan)

  headerDiv.innerHTML += '<div id="navigation-menu"/></div>'

  body.prepend(headerDiv)
}

function addNavigationMenu() {
  navMenuDiv = document.getElementById('navigation-menu')
  navMenuDiv.innerHTML = `<a class="dropbtn fakedropbtn" 
  href="/joel-cain-allan.github.io/" style="font-family:"Material Symbols Outlined"
  ">Home</a>`

  let menuKeys = ['Tech', 'Core', 'Templates']

  menuKeys.forEach((x) => {
    let lower = x.toLowerCase()
    navMenuDiv.innerHTML += `<div class="dropdown" id="${lower}-navigation-menu">
    <button class="dropbtn">${x}</button><div class="dropdown-content" 
    id="${lower}-dropdown"></div></div>`
  })

  addLinks('tech-dropdown', techLinks)
  addLinks('core-dropdown', coreLinks)
  addLinks('templates-dropdown', templateLinks)
}

function addLinks(dropdownId, keys) {
  let dropdown = document.getElementById(dropdownId)
  Object.keys(keys).forEach((x) => {
    dropdown.innerHTML += '<a href=' + keys[x] + '>' + x + '</a>'
  })
}

addHeader()
addNavigationMenu()

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
