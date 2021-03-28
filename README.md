# Currency Exchange

#### Epicodus Code Review #6: Asynchrony and APIs

#### By Shannon Lee

#### _Table of Contents_

1. [Description](#description)
2. [Technologies Used](#technologies)
3. [Setup/Installation Requirements](#setup)
4. [Additional Setup/Installation Note for Windows Users](#windows)
5. [Known Bugs](#bugs)
6. [License](#license)
7. [Contact Information](#contact)


## Description <a id="description"></a>

This is a web application built using JavaScript that converts USD into the user's desired currency when given the 3 letter currency code. Conversion rates are taken from ExchangeRate-API.

## Technologies Used <a id="technologies"></a>

* _Babel/core 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _Jest 24.9.0_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_
* _dotenv 2.0.0_
* _[ExchangeRate-API](https://www.exchangerate-api.com/)_

## Setup/Installation Requirements <a id="setup"></a>

Setup requirements
* Make sure [Node.js](https://nodejs.org/en/) and [Node Package Manager (npm)](https://www.npmjs.com/) are set up on your local machine. If not, follow the installation guide [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js).
* <a id="windows"></a>This environment was created on a Mac OS. If you are on a non Mac machine, make the following change to package.json
  * change line 8 to `"start": "npm run build & webpack-dev-server --open --mode development",`
* Acquire a free API key for the ExchangeRate-API by visiting the [ExchangeRate-API website](https://www.exchangerate-api.com/) and creating a free account with your email address. Click the "Get Free Key" button to get started.

Installation
* Clone this repository to your machine `$ git clone https://github.com/shanole/currency-exchange`
* In the terminal, navigate to the top level of this directory `currency-exchange/`
* Create an `.env` file at the top level of the directory and save your API key in it as follows: `API_KEY={your API key here}`
* Recreate project environment and install required dependencies `$ npm install`
* Create production environment `$ npm run build`
* Open project in a development server on your web browser `$ npm run start`
* To lint code run command `$ npm run lint`


## Known Bugs <a id="bugs"></a>
* If a non-numeric amount is put into the first form field, NaN bugs will occur
* If you discover any other bugs, feel free to reach out to me via my contact info below!

## License <a id="license"></a>
*[MIT](https://choosealicense.com/licenses/mit/)*

Copyright (c) 2021 Shannon Lee

## Contact Information <a id="contact"></a>
**_Shannon Lee [mailto](mailto:shannonleehj@gmail.com)_**