function getTimeOfDay (currentHour){
    
    if (currentHour < 0 || currentHour > 23){return 'incorrect value'}

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

function testCycles(){

    for (i = 1; i <= 10; i++){console.log(i + ' ')}

    for (i = 1; i <= 10; i++) {
        if (i == 7) {break}
        console.log(i + ' ')
    }

    i = 0
    while (i <= 20){
        if (i % 2 != 0){continue}
        if (i % 5 == 0){continue}
        console.log(i + ' ')
        i++
    }
}

/*Создать функцию formatPhoneNumber, которая принимает строку, представляющую номер телефона, и возвращает отформатированную строку.
 formatPhoneNumber("1234567890");
 Вывод: "(123) 456-7890"*/

function formatPhoneNumber(inputNumber) {
    
    if (isNaN(inputNumber)){
        console.log("incorrect data")
        return
    }

    code = inputNumber.slice(0, 3)
    firstPart = inputNumber.slice(3, 6)
    lastPart = inputNumber.slice(6)
    
    console.log( '(' + code + ') ' + firstPart + '-' + lastPart)
 }
 formatPhoneNumber("1234567890")
