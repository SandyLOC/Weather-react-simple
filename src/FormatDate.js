import React from "react";

export default function FormatDate(props) {
    //Variables for main date:
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thuesday",
        "Friday",
        "Saturday"
    ];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();

    if(minutes < 10 ) {
        minutes = `0${minutes}`;
    }
    //Variables for forecast days:
    let daysShort = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thue",
        "Fri",
        "Sat"
    ];
    let daysForecast = new Date(props.dateForecast);
    let dayShort = daysShort[daysForecast.getDay()];

    if(props.date) {
    // Format for main date:
    return (
        <div>
        {day} {hours}:{minutes}
        </div>
        );
    } else {
    // Format for forecast days:
        return (
            <div>
                {dayShort}
            </div>
            );
    }    
}