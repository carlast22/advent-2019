import { best_fuel, calculate_total_fuel } from './day-1'

test('if mass is 12 fuel should be 2', () => {
    var mass: number = 12
    var result = best_fuel(mass)
    expect(result).toBe(2)
})

test('if mass is 14 fuel should be 2', () => {
    var mass: number = 14
    var result = best_fuel(mass)
    expect(result).toBe(2)
})

test('if mass is 1969 fuel should be 654', () => {
    var mass: number = 1969
    var result = best_fuel(mass)
    expect(result).toBe(654)
})

test('if mass is 100756 fuel should be 33583', () => {
    var mass: number = 100756
    var result = best_fuel(mass)
    expect(result).toBe(33583)
})

test('return the total of fuels given and array of masses', () => {
    var data: Array<number> = [12, 14, 1969, 100756]
    var result = calculate_total_fuel(data)
    expect(result).toBe(34241)
})

