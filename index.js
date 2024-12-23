// Select DOM elements
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');


//add click for search button
search.addEventListener('click', () => {

    //Api key 
    const APIKey = 'Api Key';

    //get city name
    const city = document.querySelector('.search-box input').value;
    
    //city name is empty
    if (city === '')
        return;

    //fetch data from city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            //check API responce
            if (json.cod === '404') {
                // adjust container height and display error msg
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            //hide error msg if city is found
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            // Select DOM elements
            
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                default:
                    image.src = '';
            }
        });

});