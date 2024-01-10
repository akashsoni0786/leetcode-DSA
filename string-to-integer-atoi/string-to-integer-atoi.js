/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    // Remove leading whitespace
    while (s[i] === ' ') {
        i++;
    }

    // Check for sign
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Convert digits
    while (i < s.length && !isNaN(parseInt(s[i]))) {
        result = result * 10 + parseInt(s[i]);
        i++;
    }

    result *= sign;

    // Clamp the integer to the 32-bit signed integer range
    if (result > INT_MAX) {
        return INT_MAX;
    } else if (result < INT_MIN) {
        return INT_MIN;
    }

    return result;
}

