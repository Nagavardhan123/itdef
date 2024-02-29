// let a = (x,y) => {return x+y }
// console.log(a(1,2))


// let b = (...args) => {return console.log(args)}
// b(1,2,3,4,4,5)

// let b = (a,b,...args) => {console.log(a);console.log(b);console.log(args)}
// b(1,2,3,4,4,5)


// splice
// let a = [1,2,3,4]
// a.splice(2,2,'n','n')
// console.log(a)

// slice

// b = [1,2,3,4]
// console.log(b.slice(2,4))


// let a = 'naaa'


// console.log( if(a=='naaa'){
// 	return true
// })


// let a = 2.9084
// console.log(Math.ceil(a))
// console.log(Math.round(a))
// console.log(Math.floor(a))
// console.log(Math.trunc(a))


// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.SQRT2)
// console.log(Math.SQRT1_2)
// console.log(Math.LN2)
// console.log(Math.LN10)
// console.log(Math.LOG2E)
// console.log(Math.LOG10E)



// a = null
// console.log(typeof(a))

// console.log(typeof(a))
// console.log(typeof('a'))
// console.log(typeof typeof)


// a = 'naga'
// b =+ a
// console.log(b)
// console.log(typeof(b))

// console.log(Date())



// console.log( const toCamel = ('nagaisagoodboy') => {
//   return s.replace(/([-_][a-z])/ig, ($1) => {
//     return $1.toUpperCase()
//       .replace('-', '')
//       .replace('_', '');
//   });
// };)

// let a = 'naga_is_a_good_boy'
// let b = a.replace(/_([a-z])/g, ' $1')
// let c = b.split(" ")
// console.log(c)
// for ( i = 0; i<c.length; i++){
// 	c[i] = c[i][0].toUpperCase()+ c[i].substr(1)
// }
// console.log(c.join(" "))


// const publication = "freeCodeCamp";

// console.log(publication[0].toUpperCase()+publication.substr(1))


// let a = 'naga_is_a_good_boy'
// let b = a.replace(/_/g, ' ')
// let c = b.split(" ")
// console.log(c)
// for ( i = 1; i<c.length; i++){
// 	c[i] = c[i][0].toUpperCase()+ c[i].substr(1)
// }
// console.log(c.join(""))


// let a = [1,2,3,4,-1,-10]
// let b = Math.min.apply(Math, a)
// console.log(b)


// let b = [1,2,3,4]
// let b1 = b[0]
// for (let i =0; i<b.length; i++){
// 	if (b[i] <b1){
// 		b1 = b[i]
// 	}
// }
// // console.log(b1)


// let aa = 1
// let aa = 2
// console.log(aa)


// function some(){
// 	let x = 10
// 	console.log(x)
// 	{
// 		// let x =20
// 		console.log(x)
// 	}
// }
// // let x = 30
// some()
// console.log(x)
// var x = 10
// console.log(x)
// var x = 1
// console.log(x)

// let a = new Set([1,1,1,1,1,2,3,4,5,6])
// console.log(a)
// b = []
// for(i of a){
//  b.push(i)
// }
// console.log(b)

let a = ['naga','gova']
let b = []
for(i of a){
	i = i[0].toUpperCase()+ i.slice(1)
	b.push(i)
}
console.log(b)