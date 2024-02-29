// shallow copy

let obj1 = {
	one: 'naga',
	two: 'gova',
	three: 'three'
}

let obj2 = obj1
console.log('before mods')
console.log(obj1)
console.log(obj2)
console.log('after mods')
obj2.two = 'changed'
console.log(obj1)
console.log(obj2)


// deep copy

let obj11 = {
	one: 'naga',
	two: 'gova',
	three: 'three'
}

let obj22 = JSON.parse(JSON.stringify(obj1))
console.log('before mods')
console.log(obj11)
console.log(obj22)
console.log('after mods')
obj22.two = 'changed'
console.log(obj11)
console.log(obj22)