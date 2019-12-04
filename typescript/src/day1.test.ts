import { bestFuel, calculateTotalFuel } from './day1'

test('if mass is 12 fuel should be 2', () => {
    const mass = 12
    const result = bestFuel(mass)
    expect(result).toBe(2)
})

test('if mass is 14 fuel should be 2', () => {
    const mass = 14
    const result = bestFuel(mass)
    expect(result).toBe(2)
})

test('if mass is 1969 fuel should be 654', () => {
    const mass = 1969
    const result = bestFuel(mass)
    expect(result).toBe(654)
})

test('if mass is 100756 fuel should be 33583', () => {
    const mass = 100756
    const result = bestFuel(mass)
    expect(result).toBe(33583)
})

test('return the total of fuels given and array of masses', async () => {
    const data: Array<number> = [12, 14, 1969, 100756]
    const result = await calculateTotalFuel(data)
    expect(result).toBe(34241)
})

