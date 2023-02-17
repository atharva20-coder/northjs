// add.js
/**
 *
 * Calculates the Laplace transform of a function.
 *
 * @param {Function} f The function to transform.
 * @param {Number} s The value of 's' in the Laplace transform.
 * @param {Number} tMax The maximum value of 't' in the time domain.
 * @returns {Number} The Laplace transform of the function.
 */
function laplaceTransform(f, s, tMax) {
  let integral = 0;
  const step = 0.01;

  for (let t = 0; t < tMax; t += step) {
    integral += f(t) * Math.exp(-s * t) * step;
  }

  return integral;
}
module.exports = laplaceTransform;
