import '../style/main.scss'
import api from './weatherAPI.js'
import lS from './localStorage.js'
import randomCityFromLS from './randomLocalStorageCity.js'
import modeChecked from './darkSunMode.js' 
import word from './transliterations.js'

const input = document.getElementById('searchCity')

const outWeater = document.getElementById('out')

const mode = document.getElementById('mode')

const popup = document.getElementById('popup')

const checked = document.getElementById('checked')

const wrap = document.querySelector('.header');

let isResizeble = false
let isDataApi = false

let x1 = null
let y1 = null
let positionSum = 0
let weatherBlock = false
let popupBool = false

let words = ''


input.addEventListener('keydown', e => {
	let cityValue

	if(e.keyCode == 13) {
		e.preventDefault()
		
		if(input.value == '') return alert('Please input correct')
		
    if(window.screen.width <= 800) { //make screen divace width 
      popupBool = true
      popupShift()
    }

		cityValue = firstUperrCase(word(input.value))
    api.sendAPI(cityValue, outWeater)
      .then((data) => {
          lS(cityValue)
          input.value = ''
          weatherBlock = true
      })
	}
})

function popupShift() {
  if(popupBool) {
    popup.style.top = 0
  }
}

function firstUperrCase(city) {
   let arrayCity // создаем переменную для массива
   let textCity = city // кидаем аргумент в переменную
   
   let letter // переменная для буквы 
   let letterUp // переменая для редактирования буквы
   
   let result // переменная для ресультата 
   
   arrayCity = textCity.split('') // 
  
   letter = arrayCity[0]
  
   letterUp = letter.toUpperCase()
   if(arrayCity[0] == letterUp) {
     result = arrayCity.join('')
     return result
   } 
  
   arrayCity.shift()
   arrayCity.unshift(letterUp)
  
  result = arrayCity.join('')
  
   return result
}

document.addEventListener('touchstart', swaipTouchWeatherStart, false)
document.addEventListener('touchmove', swaipTouchWeatherMove, false)

function swaipTouchWeatherStart(e) {
  isResizeble = false
  const firstTouch = e.touches[0]
  y1 = firstTouch.clientY
  x1 = firstTouch.clientX

  if(popupBool) {
    popup.remove()
  }
}

function swaipTouchWeatherMove(e) {
  if(!x1 || !y1) return false

  let x2 = e.touches[0].clientX
  let y2 = e.touches[0].clientY

  let xDiv = x2 - x1
  let yDiv = y2 - y1

  if(weatherBlock == true) {
      const swipe = document.getElementById('swipe').style

    if(Math.abs(xDiv) > Math.abs(yDiv)) {
      if(xDiv > 0) {

        swipe.right = '-' + xDiv + 'px'
         if(xDiv >= 150) {
            if(!isResizeble) {
              let city = randomCityFromLS()
              api.sendAPI(city, outWeater)
              isResizeble = true
            }  
         }

      }
    }    
  }
}

checked.addEventListener('click', () => {
  modeChecked(checked.checked, wrap)
})