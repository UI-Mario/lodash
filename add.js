import createMathOperation from './.internal/createMathOperation.js'

/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */
// 好吧，把数学相关的放一起了
// 这么写，看不出来add函数接受多少个参数，返回啥
const add = createMathOperation((augend, addend) => augend + addend, 0)

export default add
