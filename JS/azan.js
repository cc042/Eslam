// document tools
const placedialog = document.querySelector(".PLace")
const placecitytext = document.querySelector(".city")
const placecountrytext = document.querySelector(".country")
const placesubmit = document.querySelector(".PLace form")

// some Prayer Variables
var Fajr;
var Sunrise;
var Dhuhr;
var Asr;
var Maghrib;
var Isha;

// Azan
const fajrTime = document.querySelector(".fajrTime")
const shurooqTime = document.querySelector(".shurooqTime")
const DuhrTime = document.querySelector(".DuhrTime")
const asrTime = document.querySelector(".asrTime")
const maghrebTime = document.querySelector(".maghrebTime")
const ishaTime = document.querySelector(".ishaTime")

function getTime(city, country) {
    const url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1`;
    fetch(url).then(response => response.json())
        .then(data => {
            const prayerTimes = data.data.timings;
            fajrTime.innerHTML = Fajr = prayerTimes.Fajr
            shurooqTime.innerHTML = Sunrise = prayerTimes.Sunrise
            DuhrTime.innerHTML = Dhuhr = prayerTimes.Dhuhr
            asrTime.innerHTML = Asr = prayerTimes.Asr
            maghrebTime.innerHTML = Maghrib = prayerTimes.Maghrib
            ishaTime.innerHTML = Isha = prayerTimes.Isha
            
        })
        .catch(error => console.error(error))
}

getTime("roma", "London")