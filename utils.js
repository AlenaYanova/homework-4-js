function largest(...arg) {
    if (arg.length === 0)
        throw new Error("Function largest() used without arguments");
    return arg.reduce((max, current) => {
        if (typeof current !== "number")
            throw new Error("Arguments in function largest() should be a number");
        if (max < current)
            return current;
        else
            return max;
    });
}

function smallest(...arg) {
    if (arg.length === 0)
        throw new Error("Function smallest() used without arguments");
    return arg.reduce((min, current) => {
        if (typeof current !== "number")
            throw new Error("Arguments in function smallest() should be a number");
        if (min > current)
            return current;
        else
            return min;
    });
}

// console.log(largest(2, 0.1, -5, 100, 3));
// console.log(smallest(2, 0.1, -5, 100, 3));

function transform(base_array) {
    if (!Array.isArray(base_array))
        throw new Error("Argument in function transform() should be array");
    return base_array.map((item) => {
        return function () {
            return item;
        }
    })
}

// const baseArray = [10, 20, 30, 40, 50];
// const newArray = transform(baseArray);
// console.log(newArray[4]());

function sum(...arg) {
    if (arg.length === 0) return undefined;
    if (arg.length === 1) return arg[0];
    if (typeof arg[arg.length-1] !== "number" || typeof arg[arg.length-2] !== "number")
        throw new Error("Arguments in function sum() should be a number");
    arg[arg.length-2] += arg[arg.length-1];
    delete arg[arg.length-1];
    --arg.length;
    return sum(...arg);
}

// console.log((sum(1,3,5,7)));

function countDown(n) {
    if (!Number.isInteger(n) && n < 0)
        throw new Error("Argument in function countDown() should be positive integer");
    for (let i = n; i >= 0; i--)
        setTimeout(function () {
            console.log(i)
        }, 1000*(n - i + 1))
}

// countDown(4);

Function.prototype.myBind = function (context, ...arg) {
    if (typeof this !== "function")
        throw new TypeError("Function.prototype.myBing - 'this' is not a function");
    const args = arg;
    const func = this;
    return function(...arg) {
        const funcArgs = [].slice.call(arg, 0);
        return func.apply(context, args.concat(funcArgs));
    };
};

// function addPropToNumber(number) { return this.prop + number; }
// let bound = addPropToNumber.myBind({ prop: 9 });
// console.log(bound(1));
