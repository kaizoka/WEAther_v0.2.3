function randomCityFromLS() {
  let lScitys = localStorage.getItem('citysWEAther')
  if(lScitys == null) return console.log('is local non')
  lScitys = JSON.parse(lScitys)
  let randomCity = getRandom(0, lScitys.length)
  let city = lScitys[randomCity]
  return city
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

module.exports = randomCityFromLS