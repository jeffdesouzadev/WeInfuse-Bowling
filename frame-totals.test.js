const getFrameTotals = require("./frame-totals.js");

test('[X] = [null]', () => {
  expect(getFrameTotals(['X'])).toEqual([null]);
});
test("[/] = ERROR", () => {
  expect(()=> { getFrameTotals(['/']);}).toThrow(RangeError)
});
test('[1] = [null]', () => {
  expect(getFrameTotals([1])).toEqual([null]);
});


test("[X, /] = ERROR", () => {
  expect(()=> { getFrameTotals(['X', '/']);}).toThrow(RangeError)
});
test('[X, X] = [null]', () => {
  expect(getFrameTotals(['X', 'X'])).toEqual([null, null]);
});
test('[X, 2] = [null]', () => {
  expect(getFrameTotals(['X', 2])).toEqual([null, null]);
});

test("[2, X] = ERROR", () => {
  expect(()=> { getFrameTotals([2, 'X']);}).toThrow(RangeError)
});
test('[2, /] = [null]', () => {
  expect(getFrameTotals([2, '/'])).toEqual([null]);
});
test('[2, /, 3] = [13, null]', () => {
  expect(getFrameTotals([2, '/', 3])).toEqual([13, null]);
});
test('[2, 3] = [5]', () => {
  expect(getFrameTotals([2, 3])).toEqual([5]);
});
test('[2, 4, 3] = [6, null]', () => {
  expect(getFrameTotals([2, 4, 3])).toEqual([6, null]);
});