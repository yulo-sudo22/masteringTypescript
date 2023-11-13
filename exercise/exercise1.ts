const PersonName = (name:string = 'you') => {
    return `One for ${name}, one for me`
}

console.log(PersonName())
console.log(PersonName("Yulo"))

function leepYear(year: number){
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0

}

console.log(leepYear(2013))
