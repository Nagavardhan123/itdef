//shallow copy
//deep copy 



// let a = {
// 	one: 'one',
// 	two:"two",
// 	three:3
// }

// let b = a       ---> adreess location

// console.log('before mods')
// console.log(a)
// console.log(b)

// console.log('after mods')
// b.two = 'changed'
// console.log(a)
// console.log(b)




//deep copy 

let a = {
	one: 'one',
	two:"two",
	three:3
}

let b = JSON.parse(JSON.stringify(a))     

console.log('before mods')
console.log(a)
console.log(b)

console.log('after mods')
b.two = 'changed'
console.log(a)
console.log(b)

