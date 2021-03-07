class WeaterAPI {
	constructor() {
		this.url = 'http://api.openweathermap.org/data/2.5/weather?'
		this.appid = '70ad2fa5936426ff2551457ca18888a2'
	}

	async sendAPI(city, out) {

		await fetch(`${this.url}q=${city}&appid=${this.appid}`)
			.then(weater => { return weater.json() })
			.then(data => { 

				let nameValue = data['name']
				let descValue = data['weather'][0]['description']
				let ingValue = data['weather'][0]['icon']
				let tempValue = Math.floor(data['main']['temp'] - 273.15)
				let speedValue = data['wind']['speed']

				out.innerHTML = ` 
					<div id="swipe" class="contantWeather__weather">
						<div class="contantWeather__nameCity">
							<h2>${nameValue}</h2>
						</div>
						<div class="contantWeather__status">
							<img src="http://openweathermap.org/img/wn/${ingValue}@2x.png">
							<h3>${descValue}</h3>
							<ul>
								<li>${tempValue}&deg</li>
								<li>Wind: ${speedValue}s</li>
							</ul>
						</div>
						<div class="contantWeather__next">
							<a href="#" class="contantWeather__nextFull">
								Full info...
							</a>
						</div>
					</div>						
				`

			})


		.catch(err => alert(`Error, you write wrong`))	


	}
}

const api = new WeaterAPI()


module.exports = api