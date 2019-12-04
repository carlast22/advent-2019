import fs from 'fs'
import * as rd from 'readline'

const reader = rd.createInterface(fs.createReadStream('typescript/inputs/day1.txt'))

function add(accumulator: number, a: number) {
    return accumulator + bestFuel(a)
}

function fuel(number: number) {
    return Math.floor(number / 3) - 2
}

export function bestFuel(mass: number): number {
    if (mass <= 6) return 0
    let result: number = fuel(mass)
    return result + bestFuel(result) 
}

export function calculateTotalFuel(data: Array<number>) {
    const total = data.reduce(add, 0)
    return total
}

const data: Array<number> = [];
reader.on("line", (l: string) => {
    const number = +l
    data.push(number)
})

reader.on('close', () => {
    const total = calculateTotalFuel(data)
    console.log(`Total fuel required is ${total}`)
})


