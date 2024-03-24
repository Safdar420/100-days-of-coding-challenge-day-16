//  Q no 46
// let Laptop = {
//   name: "Lanovo",
//   processor: "intel corei5",
//   ssd: 128,
//   Ram: "8gb",
//   describe: function () {
//     console.log(
//       `this laptop name is ${this.name} it's processor is ${this.processor} ${this.ssd} ssd with ${this.Ram}Ram`
//     );
//   },
// };
// Laptop.describe();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  Q no 47
var Laptops = [
    { make: "Dell",
        Model: "XPS 15",
        Year: 2021 },
    { Make: "Apple",
        Model: "Mackbook pro",
        Year: 2020 },
    { Make: "HP",
        Model: "specture X360",
        Year: 2021 }
];
var Laptop1, Laptop2 = Laptops;
console.log(Laptop1);
console.log(Laptop2);
// Q no 48
var priceset1 = [2000, 2500, 3000];
var priceset2 = [1200, 1500, 1800];
var combinedprices = __spreadArray(__spreadArray([], priceset1, true), priceset2, true).sort(function (a, b) { return a - b; });
console.log(combinedprices);
