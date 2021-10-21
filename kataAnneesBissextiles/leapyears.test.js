const { test } = require('@jest/globals');
const TDD = require('jest');


function leapyear(year){
   return (year %100 === 0) ? (year %400 === 0) : (year %4 === 0)
}

leapyear()

test("is this year a leap one", () => {
    expect(leapyear(2024)).toBe(true)
});
