Function.prototype.myBind = function (obj, ...args) {
    return (...rest) => this.call(obj, ...args, ...rest);
}

function sum(a, b) {
    return a + b;
}

function getA() {
    return this.a;
}

console.log(sum.myBind(null, 2)(3));
console.log(getA.myBind({a: 42})());