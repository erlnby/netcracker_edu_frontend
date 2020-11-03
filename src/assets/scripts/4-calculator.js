let calculator = {
    a: undefined,
    b: undefined,

    read: function () {
        [this.a, this.b] = prompt('Enter values:').split(' ').map(Number);
    },

    sum: function () {
        return this.a + this.b;
    },

    mul: function () {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );