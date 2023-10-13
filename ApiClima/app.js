const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey = "819cf10e25bd45ebc8d2dd5fa0ff3985";

const inputCity = document.querySelector('#city');
const btnBuscar = document.querySelector('#btnBuscar');

const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon){
    const url = `${ UrlBase }lat=${ lat }&lon=${ lon }&appid=${ ApiKey}`;
    console.log(url);
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature = (clima.main.temp -273.15).toFixed(2)
    document.querySelector('#left h2').innerHTML = clima.name;
    document.querySelector('#left h3').innerHTML = temperature + '°C';
    pintaFondo(temperature);
}

async function getClimabyCity(city){
    const url = `${ UrlBase }q=${ city}&appid=${ ApiKey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature = (clima.main.temp -273.15).toFixed(2)
    document.querySelector('#left h2').innerHTML = clima.name;
    document.querySelector('#left h3').innerHTML = temperature + '°C';
    pintaFondo(temperature);
}

navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon);
    }
);

function pintaFondo(temperature){
    const body = document.querySelector('body');

    if(temperature < 10){
        body.style.background = '#00FFFF';
    }else if (temperature < 20){
        body.style.background = '#fbff00';
    } else {
        body.style.background = '#FF5555';
    }
}


btnBuscar.addEventListener('click', () => {
    const city = inputCity.value;
    if(city){
        getClimabyCity(city);
    }
});
