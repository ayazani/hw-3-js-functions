'use strict';
// 1 task
function splitAndMerge(str, sp) {
    if(sp === ' ') {
        return str.split(' ').join('').split('').join(' ');
    } else {
        return str.split('').join(sp).split(sp+' '+sp).join(' ');
    }
}
/* //check cond
console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("Hello World!",","));
 */

// 2 task
function convert(obj) {
    var result = [];
    for (var key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}
//console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

// 3 task
function toCamelCase(str) {
    var result = "";
    for (var i = 0; i < str.length; i++){
        if(str[i] === "-" || str[i] === "_"){
         i++;
         result += str[i].toUpperCase();
        } else {
        result += str[i];
        }
    }
    return result;
}
/* //cond check
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
 */

// 4 task
function reverseWords(str) {
    return str.split("").reverse().join("");
}
//console.log(reverseWords(" A fun little challenge! "));

// 5 task
function stringExpansion(str) {
    var hasNumbers = false;
    var res = "";
    for (var i = 0; i < str.length; i++){
        if(!isNaN(Number(str[i]))){
            hasNumbers = true;
            if(Number(str[i]) && Number(str[i+1])){
                continue;
            } else {
                for (var j = 0; j < Number(str[i]); j++) {
                    res += str[i + 1];
                }
            }
        }
    }
    return hasNumbers ? res : str;
}
/*  //cond check
console.log(stringExpansion('3D2a5d2f') === 'DDDaadddddff');
console.log(stringExpansion('3d332f2a') === 'dddffaa');
console.log(stringExpansion('abcde') === 'abcde'); */

// 6 task
function largest() {
    var res = arguments[0];
    for(var i = 0; i < arguments.length; i++){
        if( res < arguments[i]) res = arguments[i]
    }
    return res;
}
function smallest() {
    var res = arguments[0];
    for(var i = 0; i < arguments.length; i++){
        if( res > arguments[i]) res = arguments[i]
    }
    return res;
}
// 7 task
function transform(arr) {
    var res = [];
    arr.forEach(function (item) {
        res.push(function () {
            return item;
        })
    });
    return res;
}
// 8 task
function sum(arg, ...args) {
    if(args.length === 0){
        return !arg ? 0 : arg;
    }
    else if (args.length === 1){
        return arg + args[0];
    } else {
        let temp = args[0];
        args.shift();
        return (arg + sum(temp, ...args));
    }
}
/* //check
let a = sum(1, 3, 5, 7);
console.log(a); */

// 9 task
function countDown(arg) {
    if (arg === 0){
        console.log(0);
    } else {
        console.log(arg);
        countDown(arg-1);
    }
}
//countDown(3); // 3 2 1 0

// 10 task
Function.prototype.myBind = function (context) {
    var fn = this;
    var args = Array.prototype.slice.call(arguments, 1);

    if (typeof(fn) !== 'function') {
        throw new Error('Not a function!');
    }
    else {
        return function () {
            return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
        };
    }
};
/*  //check cond
function addPropToNumber(number) { return this.prop + number; }
let bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); */
