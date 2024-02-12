function getTimeOfDay (currentHour){
    const nightHours = [0, 1, 2, 3, 4, 5]
    const morningHours = [6, 7, 8, 9, 10, 11]
    const dayHoyrs = [12, 13, 14, 15, 16, 17]
    const eveningHours = [18, 19, 20, 21, 22, 23]

    if (isContain(nightHours, currentHour)){
        return 'night'
    }
    else if (isContain(morningHours, currentHour)) {
        return 'morning'
    }
    else if (isContain(dayHoyrs, currentHour)) {
        return 'day'
    }
    else if (isContain(eveningHours, currentHour)) {
        return 'evening'
    } 
}

function isContain(array, value){

    array.forEach(element => {
        if (element == value) {
            return true
        } 
    });
    return false
}