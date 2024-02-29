// class nagaaa1{
// 	constructor (name,age){
// 		this.name = name,
// 		this.age = age
// 	}
// }





// let nagaobj = new nagaaa1('naga',24)
// let naga2 = new nagaaa1('gova',30)


// console.log(nagaobj)
// console.log(naga2)



// 4 char otp only numeric content


// let a = '1234567890'
// let b = ''
// // console.log(Math.floor(Math.random(a)*10))

// for (let i=0;i<4;i++){
// 	b += (Math.floor(Math.random(a)*a.length))     /// 0-1      0.23  ----2.3 ----- 2   --- 0  1 ---- 
// }
// let c  = []
// for (let i of b){
// 	// c.push(Math.floor(i*a.length))      2.9 ----floor ------    2 ---2.9 ---3 ----2
// }

// console.log(b)





let a = {
	first1: 'one',
	second: 'second',
	function1: function (city,pin){
		console.log(`your name is ${this.first1} and ${this.second} `+ city + pin + `.`)
	}
}

let b = {
	first1: 'n1',
	second: 'n2',
}


a.function1.apply(b,['bangalore ',515212])