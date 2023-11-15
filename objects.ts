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
