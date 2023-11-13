function square(num:number) {
    return num * num
}

function rando(num: number) {
    if(Math.random() < 0.5){
        return num.toString()
    }
    return num
}

console.log(square(5.5))

function greet(person: string = 'stranger'){
    console.log( `Hi there, ${person}`)
}

function gameLoop(): never {
    while(true){
        console.log("GAME LOOOP")
    }
}

gameLoop()
