// const obj1  ={
// 	name: 'naga',
// 	age: 24,
// 	place: 'sasanakota'
// }

// // console.log(obj1[name])

// const person = {
//   fname:" John",
//   lname:" Doe",
//   age: 25
// }
// console.log(person['fname'])

// const obj2 = new Object()
// obj2.name = 'naga1'
// obj2.age = 24

// console.log(obj2[name])


// const obj3 = {}
// obj3.name = 'obj3'
// obj3.age = 24
// console.log(obj3[name])

// function range(start, end){
// 	let a = []
// 	for(i=start;i<=end;i++){
// 		if(start != end){
// 			a.push(i)
// 		}
// 	}
// 	return a
// }
// let a = range(0,10)
// console.log(a)


// let a = [1,2,3,4]
// console.log(a.findIndex(myfunction))
// function myfunction(val,index,arr){
// 	return val>3
// }

// let x = Number.POSITIVE_INFINITY
// console.log(x)


// let a = new Set([1,2,2,2,2,3,4,4,4])
// let b = []
// a.forEach(el => b.push(el))
// console.log(b)

// let c = new Set(b)
// console.log(c)


// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const myArray = Object.keys(person);
// console.log(myArray)

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language;
//   }
// }
// let out = person.lang
// console.log(out)


// let pro = new Promise(function(Resolve, Reject){
// 	let x = 1
// 	if(x == 0){
// 		Resolve('you are correct!')
// 	}
// 	else{
// 		Reject('you are wrong!')
// 	}
// })

// pro.then(
// 	function(val){console.log(val)},
// 	function(err){console.log(err)}
// 	)

// async function myDisplay() {
//   let myPromise = new Promise(function(resolve, reject) {
//     resolve("I love You !!");
//   });}
//   // await myPromise
//   myDisplay.myPromise.then(
//   	function(val){console.log(val)})


// let naga = new Promise(function(resol,reje)
// {
// 	let x = 1
// 	if(x == 0){
// 		resol()
// 	}
// 	else{
// 		reje()
// 	}
// })

// naga.then(
// 	function(val){console.log('yes it is correct')},
// 	function(err){console.log('no it is not correct')}
// 	)




a = 2
b = 'mm'
console.log(a + b)