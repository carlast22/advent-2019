import fs from 'fs'
import * as rd from 'readline'

var reader = rd.createInterface(fs.createReadStream('typescript/inputs/day-1.txt'))

export function best_fuel(mass: number) {
    return Math.floor(mass / 3) - 2
}

function add(accumulator: number, a: number) {
 return accumulator + best_fuel(a)
}

export function calculate_total_fuel(data: Array<number>) {
    var total = data.reduce(add, 0)
    console.log(`Total fuel required is ${total}`)
    return total
}

var data: Array<number> = [];
reader.on("line", (l: string) => {
    var lines = l.split('/n')
    var number = +lines
    data.push(number)
})

reader.on('close', () => {
    calculate_total_fuel(data)
})


