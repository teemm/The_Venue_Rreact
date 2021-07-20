import React, {useState, useEffect, useCallback} from "react";
import { Slide } from 'react-awesome-reveal';

const TimeUntil = () => {
    const [time, setTime] = useState({
        'days' : '0',
        'hours' : '0',
        'minutes' : '0',
        'seconds' : '0'
    })
    const renderItem = (time, value) => {
        return(
        <div className="countdown_item">
            <div className="countdown_time">
                {time}
            </div>
            <div className="countdown_tag">
                {value}
            </div>
        </div>
        )
    }

    const getTimeUntil = useCallback((deadlline) => {
        const time = Date.parse(deadlline) - Date.parse(new Date());
        if(time < 0){
            console.log("Date Past")
        }else{
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)))
            // console.log(seconds, minutes, hours, days);

            setTime({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }, []) 

    useEffect(() => {
        setInterval(() => getTimeUntil("nov, 20, 2021, 01:20:00"), 1000)
    }, [getTimeUntil])
   
    return(
        <Slide left delay={300}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    event start
                </div>
                <div className="countdown_bottom">
                    {renderItem(time.days, 'Days')}
                    {renderItem(time.hours, 'hs')}
                    {renderItem(time.minutes, 'min')}
                    {renderItem(time.seconds, 'sec')}
                </div>
            </div>
        </Slide>
    )
}

export default TimeUntil;