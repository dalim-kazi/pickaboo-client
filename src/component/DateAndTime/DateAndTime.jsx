
const DateAndTime = () => {
    const showDate = new Date()
    const date = showDate.toDateString()
    const time = showDate.toLocaleTimeString()
    const displayDate =date + '-'+time
    return  [displayDate]
};

export default DateAndTime;