function largest() {
    let max = undefined;
    if (arguments[0])
        max = arguments[0];
    else return max;
    for (let i=1; i< arguments.length; i++){
        if (arguments[i] > max)
            max = arguments[i]
    }
    return max;
}

function smallest() {
    let min = undefined;
    if (arguments[0])
        min = arguments[0];
    else return min;
    for (let i=1; i< arguments.length; i++){
        if (arguments[i] < min)
            min = arguments[i]
    }
    return min;
}

// console.log(largest(2, 0.1, -5, 100, 3));
// console.log(smallest(2, 0.1, -5, 100, 3));

function transform(base_array) {
    let transform_array = [];
    for (let i=0; i < base_array.length; ++i){
        transform_array[i] = function () {
            return base_array[i];
        }
    }
    return transform_array;
}

// const baseArray = [10, 20, 30, 40, 50];
// const newArray = transform(baseArray);
// console.log(newArray[4]());

function sum(...arg) {
    if (arg.length === 0) return undefined;
    if (arg.length === 1) return arg[0];
    arg[arg.length-2] += arg [arg.length-1];
    delete arg [arg.length-1];
    --arg.length;
    return sum(...arg);
}

// console.log((sum(1,3,5,7)));

function countDown(n) {
    for (let i=n; i>= 0; i--)
        setTimeout(function () {
            console.log(i)
        }, 1000*(n-i+1))
}

// countDown(4);

Function.prototype.myBind = function (context) {
    if (typeof this !== "function")
        throw new TypeError("Function.prototype.myBing - 'this' is not a function");
    const args = [].slice.call(arguments, 1);
    const func = this;
    return function() {
        const funcArgs = [].slice.call(arguments, 0);
        return func.apply(context, args.concat(funcArgs));
    };
};

// function addPropToNumber(number) { return this.prop + number; }
// let bound = addPropToNumber.myBind({ prop: 9 });
// console.log(bound(1));
