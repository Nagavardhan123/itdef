// coding questions on HOF's
// 1.  Implement for each

// let x = ['a','b','c','d']
// x.forEach(dem => console.log(dem.toUpperCase()))



//2. Implement map
// function ca(no){
// 	return no * 2
// }

// function myMap(call,arr){
// 	arr1 = []
// 	for (let i of arr){
// 		arr1.push(ca(i))
// 	}
// 	console.log(arr1)
// }


// myMap(ca,[-1,-2,-4,0,4,3,8,10])


//3.  Implement filter
// function calll(no){
// 	if (no>=0){
// 		return true
// 	}
// }

// function myFilter(call,arr){
// 	arr1 = []
// 	for (let i of arr){
// 		if (call(i) == true){
// 			arr1.push(i)
// 		}
// 	}
// 	console.log(arr1)
// }


// myFilter(calll,[-1,-2,-4,0,4,3,8,10])

//4.  reduce function type
// let a = [1,2,3,4,5]
// let out = a.reduce((acc,el) => acc + el, 100)
// console.log(out)


//5. 




//6. chain functions

// function a(no){
// 	return no + 20
// }

// function b(no){
// 	return a(no) + 20
// }

// function c(no){
// 	console.log(`${b(no)}`)
// }

// c(20)


//7.   HOF
// let a = [2,4]
// let sum = 0
// function fun1(ele){
// 	 sum+=ele
// }
// function fun2(no){
// 	sqr = no ** 2
// 	return fun1(sqr)
// }
// function fun3(arr){
// 	for (let i of arr){
// 		if (i%2 == 0){
// 			 fun2(i)
// 		}
// 	}
// 	return sum
// }

// let out = fun3(a)
// console.log(out)


//8.    




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 1.   sum of two numbers

// function sumu(a,b){
// 	if ((typeof(a) == 'string') || (typeof(b) == 'string')){
// 		console.log('please enter valid numbers')
// 	}
// 	else{
// 		sum = a + b
// 		console.log(sum)
// }}
// sumu(1,2)


//2. check for even or odd
// function evorod(a){
// 	if ((a%1 != 0) | (a <= 0)){
// 		console.log(`${a} is either not an integer or greater than 0`)
// 	}
// 	else{
// 		if (a%2 == 0){
// 			console.log(`${a} is an even number`)
// 		}
// 		else{
// 			console.log(`${a} is an odd number`)
// 		}
// 		}
// 		}
// evorod(-22)


//3. Reverse a string

// function rever(str){
// 	b = str.split("").reverse().join("")
// 	console.log(b)
// }
// rever('naga')


//4.   calcuate square
// function  sqr(no){
// 	b = no ** 2
// 	console.log(b)
// }
// sqr(2)


//5. concatenate strings

// function conn(a,b){
// 	concattedStr = a.concat(` ` + b)
// 	console.log(concattedStr)
// }
// conn('naga','vardhan')


//6.  check for palindrome
// function  cifpali(str){
// 	a = str.split("")
// 	console.log(a)
// 	b = 0
// 	for (let i = 0; i<Math.floor(a.length/2); i++){
// 		if(a[i] == a[a.length-1-i]){
// 			b = 1
// 		}
// 		else{
// 			b = 0
// 		}
// 	}
// 	if (b == 1){
// 		console.log(`${str} is a palindrome`)
// 	}
// 	else{
// 		console.log(`${str} is not a palindrome`)
// 	}	
// }

// cifpali('12321')


//7.   calculate factorial for non-negatice integer

// function fact(a){
// 	if (a%1 != 0){
// 		if(a<=0){console.log("please enter a +ve integer number")}else{console.log("please enter an integer")}}
// 	else{
// 		function range(no){
// 				ref = []
// 				for (let i =1; i<=no; i++){
// 					ref.push(i)
// 				}
// 				return ref
// 		}
// 		ref = range(1000000)
// 		// ref = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
// 		b = []
// 		for (let i of ref){
// 			if (a%i == 0){
// 				b.push(i)
// 			}
// 		}
// 		console.log(b)
// 	}

// }
// fact(50)


//8.  largest of two numbers
// function maxu(a,b){
// 	if (a>b){
// 		console.log(`${a} is greater ${b}`)
// 	}
// 	else if (a<b){
// 		console.log(`${b} is greater ${a}`)
// 	}
// 	else if (a == b){
// 		console.log(`${b} is equal to ${a}`)
// 	}
// 	else{
// 		console.log("please enter valid numbers")
// 	}
// }
// maxu(1,'1lkanef')


// 9. greet a person

// function greet(name) {
// 	console.log(`Hello ${name}, welcome to Java Script.`)
// }
// greet('naga')


//10.   calculate average

// function aver(arr){
// 	aum = 0
// 	for(let i of arr){
// 		aum+=i
// 	}
// 	avg = aum/arr.length
// 	console.log(avg)
// }

// aver([1,2,3,4,5])

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------