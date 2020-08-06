export default addAndMod;

/**
 * This method will perform addition operation.
 *
 * @param {Number} num1 - first number for addition
 * @param {Number} num2 - second  number for additon
 * @return {Number} - Result of addition
 */
function addAndMod(num1, num2) {
  return (num1 + num2) % num2;
}
