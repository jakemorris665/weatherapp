/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const weatherBtn = document.getElementById(\"getWeather\");\nconst searchBar = document.getElementById(\"search\");\nconst place = document.getElementById(\"location\");\nconst description = document.getElementById(\"description\");\nconst temp = document.getElementById(\"temp\");\nconst wind = document.getElementById(\"wind\");\nconst body = document.querySelector(\"body\");\n\nlet searchTerm;\nlet weatherData;\n\nasync function getWeather() {\n  weatherBtn.disabled = true;\n  searchTerm = searchBar.value;\n  try {\n    let response = await fetch(\n      `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&APPID=5bc5b119aff6ffba91bc96547a288038`,\n      { mode: \"cors\" }\n    );\n    weatherData = await response.json();\n    console.log(weatherData);\n    let myData = processWeather(weatherData);\n    displayWeather(myData);\n    weatherBtn.disabled = false;\n    searchBar.value = \"\";\n  } catch (error) {\n    if (weatherData.cod === \"404\") {\n      alert(\"city not found\");\n    } else if (weatherData.cod === \"400\") {\n      alert(\"please enter a city\");\n    }\n    console.log(error);\n    weatherBtn.disabled = false;\n    searchBar.value = \"\";\n  }\n}\n\nfunction processWeather(weatherData) {\n  let myData = {\n    weather: weatherData.weather[0].main,\n    description: weatherData.weather[0].description,\n    temp: weatherData.main.temp,\n    tempFeel: weatherData.main.feels_like,\n    city: weatherData.name,\n    country: weatherData.sys.country,\n    wind: weatherData.wind.speed,\n  };\n  return myData;\n}\n\nfunction displayWeather(myData) {\n  console.log(myData.weather);\n  if (myData.weather === \"Clouds\") {\n    body.className = \"bg bgClouds\";\n  } else if (myData.weather === \"Clear\") {\n    body.className = \"bg bgClear\";\n  } else if (myData.weather === \"Thunderstorm\") {\n    body.className = \"bg bgThunder\";\n  } else if (myData.weather === \"Rain\" || myData.weather === \"Drizzle\") {\n    body.className = \"bg bgRain\";\n  } else if (myData.weather === \"Snow\") {\n    body.className = \"bg bgSnow\";\n  }\n  description.textContent = myData.description;\n  temp.textContent = myData.temp + \" degrees C\";\n  place.textContent = `${myData.city}, ${myData.country}`;\n  wind.textContent = \"Wind speed: \" + myData.wind + \" m/hr\";\n}\n\nweatherBtn.addEventListener(\"click\", getWeather);\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;