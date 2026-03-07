function sum(a, b) {
    return a + b;
}

function calculateNumbers(var1, var2) {
    var sumResult = sum(var1, var2);
    return sumResult * 2;
}

module.exports = {
    calculateNumbers: calculateNumbers
};