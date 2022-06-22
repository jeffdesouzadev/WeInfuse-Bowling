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

//PROVIDED EXAMPLE OUTPUTS
test('[4, 5, X, 8] = [9, null, null]', () => {
  expect(getFrameTotals([4, 5, 'X', 8])).toEqual([9, null, null]);
});
test('[4, 5, X, 8, 1] = [9, 19, 9]', () => {
  expect(getFrameTotals([4, 5, 'X', 8, 1])).toEqual([9, 19, 9]);
});


test('[X, X, X, X, X, X, X, X, X, X, X, X,] = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]', () => {
  expect(getFrameTotals(['X','X','X','X','X','X','X','X','X','X','X','X'])).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]);
});