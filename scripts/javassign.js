// 1: Check if a Number is Positive, Negative, or Zero


// let a = 'naga'
// if (a>0){
// 	console.log("it is a +ve number")
// }
// else if (a<0){
// 	console.log("it is a -ve number")
// }
// else if (a == 0){
// 	console.log("number is zero")
// }
// else{
// 	console.log("please enter a valid number")
// }

// Check if a Year is a Leap Year

// let a = 4
// if (a%4 == 0){
// 	if (a%100 != 0){
// 			console.log(`${a} is a leap year.`)
// 		}
// 	else if (a%400 == 0){
// 			console.log(`${a} is a leap year.`)
// 		}
// 	else{
// 	console.log(`${a} is not a leap year.`)
// 		}
// 	}
// else if (a%4 != 0){
// 	console.log(`${a} is not a leap year.`)
// }
// else{
// 	console.log(`${a} is not a valid number.`)
// }


// Determine the Largest of 3 Numbers

// let a = [1,2,3]
// let b = a[0]
// for (let i=0; i<a.length; i++){
// 	if(b < a[i]){
// 		b = a[i]
// 	}
// }
// console.log(b)


 // Write code using switch statement to show traffic signal light information

// let a ='orange'

// switch(a){
// case 'red':
// 	console.log("it is red light");
// 	break;
// case 'orange':
// 	console.log("it is orange light")
// 	break;
// case 'green':
// 	console.log("it is green light")
// 	break;
// default:
// 	console.log("please enter one among 'red','orange' and 'green'")
// }


// conversion from snake to camel

// let a ='NAga_vardhan_pc'
// b = a.replace(/([a-z])_([a-z])/g,`$1$2`).split("")
// console.log(b)
// for (let i =0; i<b.length; i++){
// 	if (i == 0){
// 		b[i] = b[i].toLowerCase()
// 	}
// 	else{
// 	b[i] = b[i][0].toUpperCase() + b[i].substr(1)
// }
// }
// b = a.replace(/([a-z])_([a-z])/g,`$1$2`)   --> NAgavardhanpc-->['N','A']
// // console.log(b.join(""))


let a = prompt("enter a value: ")
console.log(a)


