const fizzBuzz = require('./fizzbuzz')

test("3 should return fizz", () => {
    let results = fizzBuzz(3)
    expect(results).toBe('FIZZ')
})