// let a = [1,2,3,4]
// let max1 = a.sort()
// let no = max1[a.length-1]
// a = a.replace(no,0)
// no = max1[a.length-1]
// let max2 = a.sort()
// a = a.replace(max2[a.length-1],0)
// let max3 = a.sort()
// console.log(max3[a.length-1])


// let a = [1,2,3,4]
// a[2] = 0
// console.log(a)



// let a = [[1,2,[3,4]], ['a','b']]
// let b = []
// for (let i of a)
// {
// 	if (i.length > 1)
// 	{
// 		for( let j of i)
// 		{
// 			if (j.length > 1)
// 			{
// 				for( let k of j)
// 				{ 
// 					if (k.length > 1)
// 					{
// 						b.push(k)
// 					}
// 					else
// 					{
// 						b.push(k)
// 					}
// 				}
// 			}
// 			else
// 			{
// 				b.push(j)
// 			}
// 		}
// 	}
// 	else
// 	{
// 		b.push(i)
// 	}
// }
// console.log(b)


// b==> [1,2,]













// let a = {naa: function (){
// 	console.log(this.first+this.last)
// }
// }


// let b = {
// 	first: 'LH',
// 	last: 'Huli',
// }


// a.naa.call(b)





// 1.  1st min

// function min(arr){
// 	let b = 0
// 	for(i of arr){
// 		if(i<b){
// 			b = i
// 		}
// 	}
// 	return b
// }

// let a = [1,-2,3,4]
// mini = min(a)
// console.log(mini)


// 2.  2nd min

// function min(arr){
// 	let b = Infinity
// 	for(i of arr){
// 		if(i<b){
// 			b = i
// 		}
// 	}
// 	return b
// }

// let a = [1,1000000000,3,4]
// mini1 = min(a)
// // console.log(mini1)
// ind = a.indexOf(mini1)
// a[ind] = Infinity
// mini2 = min(a)
// console.log(a)
// console.log(mini2)


// 3. camel to sink


// 4.  sorting of an array ascending and descending order

// let a = ['a','f','e','g','t','y','h','u','i','b','s','s','f','g','b','d','s','f','t','g','v','x','c','s']
// console.log(a.sort())
// console.log(a.sort().reverse())


// 5. finding factorial
// a = 5
// function fac(n1){
// 	let b = []
// 	for(i=1;i<=n1;i++){
// 		b.push(i)
// 	}
// 	return b
// }
// arr = fac(a)
// let out = arr.reduce((acu,el) => acu*el)
// console.log(out)

// let a = 5
// function factorial(a){
//     var fact=1;
//     var i=1;
// 	while(i<=a){
//     	fact=fact*i;
// 		i++;
//     }
//     console.log(fact)
// }

// factorial(a)

// 6.  fibonacci sequence



// function fib(length){
// 	let arr = [0,1]
// 	let a = arr[0]
// 	let b = arr[1]
// 	let i = 1
// 	while(i<=length){
// 		let c = a+b
// 		arr.push(c)
// 		a = b
// 		b = c
// 		i++
// 	}
// 	console.log(arr)

// }


// let len = 10
// fib(len)


// 8. reverse a string
// let a ='naga'
// console.log(a.split('').reverse().join(''))


// 9. password combos

// let a =[1,2,3,4,5,6,7,8,9,0]
// let b = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// let c = []
// for (i=1;i<=4;i++){
// 	c.push(a[Math.floor(Math.random() * a.length)])
// 	c.push(b[Math.floor(Math.random() * b.length)])
// } 
// console.log(c.join(''))




// let a = ()=>{
// 	let b = ()=>{
// 		let a = 1
// 		let c = ()=>{
// 			// let a = 1
// 			console.log(a)
// 			// a = 2
// 			}
// 			a = 10
// 		return c

// 		}
// 	return b
// }
// let out = a()
// out1 = out()
// out1()


// let a = [1,2,3,4]
// let b = [10,12,...a]
// console.log(b[3])

// let a1 = [1,2,3,4]
// let [r,s,...b1] = a1
// console.log(b1[0])


// let a = [1,2]
// function fun(){
// 	a.push('fun1')
// 	console.log(a)
// }
// function fun(){
// 	a.push('fun2')
// 	console.log(a)
// }
// function fun(){
// 	a.push('fun3')
// 	console.log(a)
// }
// fun()

// class clas1{
// 	constructor(par1){
// 			this.par1 = par1
// 	}
// 	fun1(){
// 		console.log(this)
// 	}
// }


// class clas2 extends clas1{

// }

// let out = new clas2(400)
// console.log(out)

// let out1 = new clas1(10)
// out1.fun1()


















//where each word should be start with a capital letter




// let a = ['naga','gova','praneeth','shashi','one','two']
// let b = []
// for(i of a){
// 	let spli = i.split('')    //   'na ga'.split(' ')---->['na','ga']
// 	let c = spli[0].toUpperCase()+i.substr(1)
// 	b.push(c)
// }

// console.log(b)



// a = [1,2,3,4]
// for (i in a){
// 	console.log(i)
// }



// class Car{
// 	constructor(name,model){
// 			this.name = name
// 			this.model = model
// 	}
// 	name1(){
// 		return this
// 	}
// 	age(x){
// 		return x - this.model
// 	}
// }

// const car1 = new Car('ford','2000')
// // console.log(`the car ${car1.name} is ${car1.age(2024)} years old`)

// console.log(car1.name1())



// class Car{
// 	constructor(brand){
// 		this.brand = brand
// 	}
// 	present(){
// 		return `i have a ` + this.brand + `car.`
// 	}
// }

// class car2 extends Car{
// 	constructor(brand,age){
// 		super(brand)
// 		this.age = age
// 	}
// 	now(){
// 		return 'i have a ' + this.brand +' car which is ' + this.age+ 'old' 
// 	}
// }


// const out = new car2('ford',20)
// console.log(out.now())


class Car{
	constructor(brand, brand2){
		this.brand = brand
	}
	get now1(){ 
		return this.brand
	}
	set now1(brand2){
		this.brand = brand2
	}
	get now3(){
		return this.brand
	}
}

const out = new Car('BMW','FORD')
console.log(out.now1)
console.log(out.now3)









