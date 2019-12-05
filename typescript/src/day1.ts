import * as fs from 'fs'

const currentInput = fs.readFileSync('typescript/inputs/day1.txt', 'utf8')

function add(accumulator: number, n: string): number {
  const number = +n
  return accumulator + bestFuel(number)
}

function fuel(number: number) {
  return Math.max(0, Math.floor(number / 3) - 2)
}

export function bestFuel(mass: number): number {
  let finalSum = 0
  let calculatedFuel = 0
  let currentMass = mass

  do {
    calculatedFuel = fuel(currentMass)
    finalSum += calculatedFuel
    currentMass = calculatedFuel
  } while (calculatedFuel > 0)
  return finalSum
}

export function calculateTotalFuel(input: string): number {
  let total = 0
  const data = input.split('\n')

  total = data.reduce(add, 0)
  return total
}

const result = calculateTotalFuel(currentInput)
console.log(`This is the total fuel required: ${result}`)
