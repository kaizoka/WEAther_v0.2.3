# WEAther v0.2.3 ~

Это приложение было созданно для наработке скила, оно выдает информацию о погоде на данный момент, из API сайта [OpenWeatherMap](openweathermap.org), огромное им спасибо за беслплатную информацию.

> Посмотреть приложение можно [тут](weather-version.surge.sh "weather-version.surge.sh")

## Для использования моего преложения на пк: 

1. Скачайте код с репозитория 

2. Проинициализируйте проэкт через `npm init`

3. Установити модули `npm i`
	>Все нужное находиться в файлах `package.json webpack.config.js`

4. Для запуска на локальном сервере `npm run dev`
	>Убудитесь что ваш порт '3000' не занят, либо поменяйте порт в файле `webpack.config.js` в, ```js port: 3000 ```

5. if(weather) { Ура все работает! } else { Если вы сделали все правельно, то напишите мне где я ошибся }


## package.json

```json 
{
  "name": "WEAtherv0.2.1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV=development webpack",
    "prod": "cross-env NODE_ENV=production webpack",
    "beck": ""
  },
  "keywords": [
    "js",
    "css",
    "sass",
    "webpack",
    "html",
    "API"
  ],
  "author": "Zhurba Dmitry <dima.xhurba.10@mail.ru>",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "copy-webpack-plugin": "^8.0.0",
    "cross-env": "^7.0.3",
    "css-loader": "^5.1.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.2.0",
    "mini-css-extract-plugin": "^1.3.9",
    "node-sass": "^5.0.0",
    "sass": "^1.32.8",
    "sass-loader": "^11.0.1",
    "style-loader": "^2.0.0",
    "webpack": "^5.24.2",
    "webpack-cli": "^4.5.0",
    "webpack-dev-server": "^3.11.2"
  }
}
```

## webpack.config.js

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

const ENV = process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
	mode: ENV,
	entry: './src/app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[chunkhash].js',
	},

	devServer: {
		port: 3000,
		hot: true,
		open: true,
	},

	module: {
		rules: [
			{

				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
				], 
			},

			{
 				test: /\.(png|jpe?g|gif)$/i,
        		use: [
          			{
            			loader: 'file-loader',
        			use: [
          			{
            				loader: 'file-loader',
          			},
        		],
			},
		],
	},

	plugins: [

		new HtmlWebpackPlugin({
			template: './src/public/index.html'
		}),

		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),

		new CleanWebpackPlugin(),

		new CopyPlugin({
			patterns: [
			 	{
			 		from: './src/icon/icon.png',
			 		to: path.resolve(__dirname, 'dist')
			 	},
			 	{
			 		from: './src/png/right-arrow.png',
			 		to: path.resolve(__dirname, 'dist')
			 	}
			]
		})
	],
}
```

# Моё слово

Приятного пользования!

# ~	
