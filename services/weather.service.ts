/**
 * Service responsible for retrieving Weather Data using the openweathermap.org API
 */
import axios from "axios";

export class WeatherService {


    static async getWeather(place: string) {

        const API_KEY = '1455382c9be6c3db4fe8f894230202b7'
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${place}&appid=${API_KEY}`)

        let message = `The weather in ${response.data.name} is:\n`
        message += `Temperature: ${response.data.main.temp}°C\n`
        message +=`Humidity: ${response.data.main.humidity}%`

        return message
    }
}