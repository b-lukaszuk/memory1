/**
 * imitates python's range function, retruns arrOfConsecutiveNums
 * imitates a bit func overloading from c++, java, e.g.
 * range(2) -> [0, 1]; range(-2) -> [0, -1] (default end=start, start=0, by=1)
 * range(1, 3) -> [1, 2, 3]; range(-1, -3) -> [-1, -2] (default by=1)
 * @param {number} start first value (incl)
 * @param {number} end end value (excl)
 * @param {number} by step betw vals (always positive, even if numbers go down)
 * @returns {Array<number>} array of vals from, to, by
 */
function pyRange(start: number, end?: number, by?: number): Array<number> {

    let result: Array<number> = [];

    if (arguments.length === 1) {
        end = start;
        start = 0;
        by = 1;
    }

    // inaczej angular strict checker protestuje
    by = (by === undefined || by === 0) ? 1 : by;
    end = (end === undefined) ? (start + 1) : end;

    if (start < end) {
        for (let i = start; i < end; i += by) {
            result.push(i);
        }
    } else {
        for (let i = start; i > end; i -= by) {
            result.push(i);
        }
    }

    return result;
}

export default pyRange;
