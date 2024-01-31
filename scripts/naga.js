// write a 2 table using for loop


// let a = 2;
// for (i=1;i<=10;i++)
// {
// 	let b = a * i;
// 	let c = b.toString().padStart(2,`0`)
// 	console.log(`${a} X ${i.toString().padStart(2,`0`)} = ${c}`)
// }

// let a = 'naga'
// // b = ['']
// // for (var j = length(a); j >=0; i--) {
// // 	b.push(a[j]);
// // }
// console.log(length(a))

// let x = [1, 3454, 655, 24, 7, 8, 9999]
// var b = x[0];
// var c = x[1];
// for (let i = 2; i < x.length; i++)
// {
// 	if (x[i] > b){
// 		b = x[i];
// 		if (x[i] < c) {
// 			c = x[i];
// 		console.log(c)
// 	}
// }	
// }
// // console.log(c)

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);

// console.log(months)
// console.log(spliced)

// let a = ["naga","gova","lh","rx"];
// a.splice(1,0,2)
// console.log(a)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(0);
// console.log(typeof(fruits))


// let a = [1,2,3,4]
// // b = a.indexOf(2)
// // a.splice(b,1,0)
// // console.log(a)
// function funn(arr)
// {
// 	var b = arr[0];
// for (var i = 1; i < arr.length; i++) {
// 	if (arr[i] > b) {
// 		b = arr[i];
// 	}
// }
// }
// funn(a)
// inde  = a.indexOf(b)
// a.splice(inde,1,0)
// console.log(a)
// console.log(b)
// funn(a)
// console.log(b)





// function funn(arr)
// {
// 	var b = arr[0];
// for (var i = 1; i < arr.length; i++) {
// 	if (arr[i] > b) {
// 		b = arr[i];
// 	}
// }
// }







// let a = [9,5,9,9]
// var b = a[0];
// function larg(arr, val){for (let i = 1; i < a.length; i++) {if (a[i] > b) {	b = a[i];}}};
// larg(a, b);
// for (let i = 0; i < a.length; i++) {inde = a.indexOf(b); a[inde] = 0};
// b = a[0];
// larg(a, b);
// console.log(b)


// program to convert camel to snake case
// var a = "nagaIsAgoodBoy"
// var b = a.split('')
// function  captoun(arr){
// 	for ( let el in arr) {
// 		var ref = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// 			if (typeof(ref[el]) == 'string') {
// 				let c = ref.indexOf(ref[el])
// 					arr[el] = `_${ref[c]}`
// 			}
// 	}
// 	return arr
// }
// console.log(captoun(b).join(''))

// var a = "nagaIsAGoodBoy"
// var b = a.split('')
// function  captoun(b)
// {
// 	for ( let i=0; i < b.length; i++) 
// 	{
// 		let ref = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// 		let ref2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// 		let ind = ref.indexOf(b[i])
// 		if ( ind != -1) {
// 			b[i] = `_${ref2[ind]}`
// 		}
// 	}
// 	return b
// }
// console.log(captoun(b).join(''))

// // a = [1,2,3,4]
// // console.log(a.indexOf(10))



// var na = 'nagaIsAGoodBoy'
// function  con(na) {
// 	na.replace(/A/g,'_a');na.replace(/Z/g,'_z');na.replace(/U/g,'_u');na.replace(/P/g,'_p');na.replace(/K/g,'_k');
// 	na.replace(/B/g,'_b');na.replace(/Y/g,'_y');na.replace(/T/g,'_t');na.replace(/O/g,'_o');na.replace(/J/g,'_j');
// 	na.replace(/C/g,'_c');na.replace(/X/g,'_x');na.replace(/S/g,'_s');na.replace(/N/g,'_n');na.replace(/I/g,'_i');
// 	na.replace(/F/g,'_f');na.replace(/W/g,'_w');na.replace(/R/g,'_r');na.replace(/M/g,'_m');na.replace(/H/g,'_h');
// 	na.replace(/E/g,'_e');na.replace(/V/g,'_v');na.replace(/Q/g,'_q');na.replace(/L/g,'_l');na.replace(/G/g,'_g');
// 	na.replace(/D/g,'_d');
// }

// // con(na)
// const _ = require("lodash");
// console.log(_.snakeCase('nagaIsAGoodBoy'))


// let camelCaseString = "GeeksForGeeks";
 
// let myStr = camelCaseString.split(/(?=[A-Z])/);
// let snakeCaseArray = myStr.map(word => word.toLowerCase());
// let snakeCaseString = snakeCaseArray.join('_');
 
// console.log(snakeCaseString);

// camelCaseSnake = "GeeksForGeeks";

// console.log(camelCaseString.replace(/([a-z])([A-Z])/g, '$1_$2'). toLowerCase());

// snakeCaseCamel = "geeks_for_geeks";
// b = snakeCaseCamel.replace(/([a-z])_([a-z])/g, '$1 $2');
// c = b.split(" ");
// console.log(c)
// for (let i = 1; i< c.length; i++) {
// 	c[i] = c[i][0].toUpperCase() + c[i].substr(1);
	
// }
// console.log(c.join(" "))


// let a = 'naga'
// function naa(a) {
// 	if(typeof(a) == 'string'){
// 		console.log(1)
// 	}
// 	else{
// 		console.log(0)
// 	}
// }
// let c = naa(a)
// console.log(c)


// camelCaseString = "geeks_for_geeks";

// console.log(camelCaseString. replace(/(.*?)_([a-zA-Z])/g));



let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  console.log("Hello " + person + "! How are you today?");
}














