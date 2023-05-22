import { myFactorial } from "./factorial.js";

const myPermutation = (n, r) => {
    let result;
    let denum = n - r;
    result = myFactorial(n) / myFactorial(denum);
    return result;
}

export { myPermutation };
