// let a = (x,y) => {return x+y }
// console.log(a(1,2))


// let b = (...args) => {return console.log(args)}
// b(1,2,3,4,4,5)

let b = (a,b,...args) => {console.log(a);console.log(b);console.log(args)}
b(1,2,3,4,4,5)