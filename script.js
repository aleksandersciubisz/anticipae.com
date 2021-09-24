// Logo image hover substitution
function hoverLogo(element) {
  element.setAttribute('src', 'img/logoGifBlack.gif')
}

function unhoverLogo(element) {
  element.setAttribute('src', 'img/logoGifBlack.gif')
}

// Main page anticipae image hover substitution
function hoverLogo1(element) {
  element.setAttribute('src', 'img/anticipae1.gif')
}

// Main page anticipae3 image hover substitution
function hoverLogo3(element) {
  element.setAttribute('src', 'img/anticipae3.gif')
}

// Main page anticipae4 image hover substitution
function hoverLogo4(element) {
  element.setAttribute('src', 'img/anticipae4.gif')
}

// Hamburger menu
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

// Create the observer for events on scroll
var observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the CSS class that has your animation
      entry.target.classList.add('fade-in')
      return
    }

    entry.target.classList.remove('fade-in')
  })
})

// Observe the element
var element1 = document.getElementById('sectionTitle1')
observer.observe(element1)
var element2 = document.getElementById('sectionTitle2')
observer.observe(element2)
var element3 = document.getElementById('sectionTitle3')
observer.observe(element3)

// console main page element
// function([string1, string2],target id,[color1,color2])
consoleText(['Think', 'Predict', 'create your future'], 'text', [
  '#101820;',
  '#101820;',
  '#101820;',
])

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff']
  var visible = true
  var con = document.getElementById('console')
  var letterCount = 1
  var x = 1
  var waiting = false
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift()
        colors.push(usedColor)
        var usedWord = words.shift()
        words.push(usedWord)
        x = 1
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x
        waiting = false
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true
      window.setTimeout(function () {
        x = -1
        letterCount += x
        waiting = false
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false
    } else {
      con.className = 'console-underscore'

      visible = true
    }
  }, 400)
}
