import fs from 'fs'
import * as rd from 'readline'

const reader = rd.createInterface(fs.createReadStream('typescript/inputs/day1.txt'))

export function bestFuel(mass: number) {
    return Math.floor(mass / 3) - 2
}

function add(accumulator: number, a: number) {
 return accumulator + bestFuel(a)
}

export function calculateTotalFuel(data: Array<number>) {
    const total = data.reduce(add, 0)
    console.log(`Total fuel required is ${total}`)
    return total
}

const data: Array<number> = [];
reader.on("line", (l: string) => {
    const number = +l
    data.push(number)
})

reader.on('close', () => {
    calculateTotalFuel(data)
})


