 function lS(city) {

  let cityInLocalStorage = localStorage.getItem('citysWEAther')
  localStorage.removeItem('citysWEAther')
  let cityParseLocalStorage
  let cityStringifyLocalSorage


  const evenSome = item => item == city

  if(cityInLocalStorage == null) {

    return localStorage.setItem('citysWEAther', `["${city}"]`)

  }

  cityParseLocalStorage = JSON.parse(cityInLocalStorage)

 
  if(cityParseLocalStorage.some(evenSome)) {

    return console.log('yes') //в этом блоке  если есть схожесть 

  } else {

    cityParseLocalStorage.push(city) // тут пушим в массив если нет 
    cityStringifyLocalSorage = JSON.stringify(cityParseLocalStorage)
    localStorage.setItem('citysWEAther', cityStringifyLocalSorage) 
  }
}

module.exports = lS