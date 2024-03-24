//  Q no 46
let Laptop ={
   make:"DELL",
   model:"XPS 15",
   year:2021,
   describe:function(){
    console.log(`this is a ${this.make},${this.model},${this.model}`);
   }
}
Laptop.describe()
//  Q no 47

let Laptops =[
  {make: "Dell",
   Model: "XPS 15",
   Year: 2021},
   {Make: "Apple",
   Model: "Mackbook pro",
   year:2020},
   {Make: "HP",
   Model: "specture X360",
   Year: 2021}
];
let Laptop1 , Laptop2 =Laptops;
console.log(Laptop1);
console.log(Laptop2);

// Q no 48

let priceset1 =[2000,2500,3000];
let priceset2 =[1200,1500,1800];
let combinedprices =[...priceset1 , ...priceset2].sort((a,b) => a - b);
console.log(combinedprices);
