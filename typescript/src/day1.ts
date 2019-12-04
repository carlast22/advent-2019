import fs from 'fs'

const currentInput = fs.readFileSync('typescript/inputs/day1.txt', 'utf8')

function fuel(number: number) {
    return Math.floor(number / 3) - 2
}

export function bestFuel(mass: number): number {
    if (mass <= 6) return 0
    let result: number = fuel(mass)
    return result + bestFuel(result) 
}

export function calculateTotalFuel(input: string): number {
    let total: number = 0;
    const data: string[] = input.split('\n');

    data.map(n => {
        const number = +n
        total += bestFuel(number);
    })

    return total;
}

const result = calculateTotalFuel(currentInput);
console.log(`This is the total fuel required: ${result}`)
