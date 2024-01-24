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

let x = [1, 3454, 655, 24, 7, 8, 9999]
var b = x[0];
for (let i = 1; i < x.length; i++)
{
	if (b < x[i]){
		b = x[i];
	}
	else{
		continue
	}
}
console.log(b)
