const getFrameTotals = require("./frame-totals.js");

test('[X] = [null]', () => {
  expect(getFrameTotals(['X'])).toEqual([null]);
});
test('[/] = [null]', () => {
  expect(getFrameTotals(['/'])).toEqual([null]);
});
test('[1] = [null]', () => {
  expect(getFrameTotals([1])).toEqual([null]);
});