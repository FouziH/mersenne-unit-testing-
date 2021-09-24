const fizzBuzz = require('./fizzbuzz')

test("3 should return fizz", () => {
    let results = fizzBuzz(3)
    expect(results).toBe('FIZZ')
})

test("10 should return BUZZ", () => {
    let results = fizzBuzz(10)
    expect(results).toBe("BUZZ")
})