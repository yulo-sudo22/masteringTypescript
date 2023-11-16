//Type Aliases
type Point = {
    x: number,
    y: number
}

let coordinates: Point = {x:22, y:34}

function randomCoordinate(): Point {
    return {x: Math.random(), y: Math.random()}
}

function doublePoint(point: Point): Point {
    return {x: point.x * 2, y:point.y * 2}
}

// Nested Object

type Song = {
    title: string;
    artist: string;
    numStream: number
    credits: {
        writer: string
    }
}

function calculatePayout(song: Song):number{
    return song.numStream * 0.0033
}

function printSong(song: Song):void {
    console.log(`${song.title} - ${song.artist}`)
}

const mySong: Song = {
    title: "Cada criança com o seu olhar",
    artist: "Chorão",
    numStream: 298349,
    credits: {
        writer: "Chorão"
    }
}

const earnings = calculatePayout(mySong)
console.log(earnings)
printSong(mySong)

// Intersection Types

type cat = {
    numLives: number
}

type dog = {
    breed: string
}

type CatDog = dog & cat & {
    age: number
}

let Bob:CatDog = {
    age: 22,
    numLives: 1,
    breed: "Husky",
}

console.log(Bob)
