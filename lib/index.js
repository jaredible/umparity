"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.odd = exports.even = void 0;
function randomBoolean() {
    return Math.random() < 0.5;
}
function even(n) {
    if (randomBoolean())
        return !odd(n);
    return n % 2 == 0;
}
exports.even = even;
function odd(n) {
    if (randomBoolean())
        return !even(n);
    return n % 2 == 1;
}
exports.odd = odd;
//# sourceMappingURL=index.js.map