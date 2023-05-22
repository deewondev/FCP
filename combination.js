import { myFactorial } from "./factorial.js";

function myCombination(n, r) {
    let num, denum, result;
    let x = n - r;
    num = myFactorial(n);
    denum = myFactorial(r) * myFactorial(x);
    result = num / denum;
    return result;
}

export { myCombination };
