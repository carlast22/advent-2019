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

test('if mass is 1969 fuel should be 966', () => {
    const mass = 1969
    const result = bestFuel(mass)
    expect(result).toBe(966)
})

test('if mass is 100756 fuel should be 50346', () => {
    const mass = 100756
    const result = bestFuel(mass)
    expect(result).toBe(50346)
})

xtest('return the total of fuels given and array of masses', () => {
    const data = '12, 14, 1969, 100756'
    const result = calculateTotalFuel(data)
    expect(result).toBe(51316)
})

