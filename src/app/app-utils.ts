import {WeatherType} from "./model/enum/weather-type";

export class AppUtils {

    public static getWeatherStatus(weatherId: number): WeatherType {
        if (weatherId >= 200 && weatherId < 600) {
            return WeatherType.RAIN;
        } else if (weatherId >= 600 && weatherId < 700) {
            return WeatherType.SNOW;
        } else if (weatherId === 800) {
            return WeatherType.SUN;
        } else {
            return WeatherType.CLOUDS;
        }
    }

    public static getDayNameFromDt(dt: number): string {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(dt * 1000);
        const dayName = days[d.getDay()];
        const monthName = months[d.getMonth()];
        return dayName + ', ' + monthName + ' ' + d.getDate();
    }
}
