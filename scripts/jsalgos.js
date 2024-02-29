// // 1.   fibannoci seires

// const a = n => 
// 	Array.from({length:n}).reduce(
// 		(acc,val,i) => acc.concat(i>1?acc[i-1]+acc[i-2]:i),[]
// 		)

// console.log(a(5))



// const fibonacci = n =>
//   Array.from({ length: n }).reduce(
//     (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
//     []
//   );

// console.log(fibonacci(6)); 


// const binarySearch = (arr, item) => {
//   let l = 0,
//     r = arr.length - 1;
//   while (l <= r) {
//     const mid = Math.floor((l + r) / 2);
//     const guess = arr[mid];
//     if (guess === item) return mid;
//     if (guess > item) r = mid - 1;
//     else l = mid + 1;
//   }
//   return -1;
// };

// console.log(binarySearch([1, 2, 1, 4, 0], 1))



// a = [1,2,3,4,5,6,7,8,9,1,1,1,2,2,2,3,3,3,4,4,4,5,5,6,6,7,7,8]
// out = []
// for (i=0;i<a.length;i++){
// 	for(j=i+1;j<a.length;j++){
// 		if (a[i] > a[j]){
// 			temp = a[i]
// 			a[i]= a[j]
// 			a[j]=temp
			
// 		}
// 	}
// 	out.push(a[i])
// }
// console.log(out)
// for (let i=0;i<a.length;i++){
// 	count = 0
// 	if (a[i] in a){
// 		count+=1
// 	}
// }
// console.log(out)



// a = [1,1,1,2,3,4,4,4,1,5]
// console.log(a.indexOf(2))


// ab = [1,2,3,4,5,6,7,8,9,1,1,1,2,2,2,3,3,3,4,4,4,5,5,6,6,7,7,8]
// function unique(arr){
// 	return arr.filter((item,index) => arr.indexOf(item) === index)
// }
// out = unique(ab)

// function ass(a){
// 	out1 = []
// for (i=0;i<a.length;i++){
// 	for(j=i+1;j<a.length;j++){
// 		if (a[i] > a[j]){
// 			temp = a[i]
// 			a[i]= a[j]
// 			a[j]=temp
			
// 		}
// 	}
// 	out1.push(a[i])
// }
// console.log(out1)
// }


// ass(out)



// let a1 = 'naga is a good boy'
// let ref = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// let a2 = a1.replace(/ /g, ``)
// let c = a2.split("")
// for (i=0;i<ref.length;i++){
// 	count = 0
// 	for(j=0;j<c.length;j++){
// 		if (c[j] == ref[i]){ 
// 			count+=1
// 		}
// 	}
// 	if (count >= 1){
// 		console.log(`your sentence has "${ref[i]}"  `+ count + `    in count.`)
// 	}
// }

// function myFirst() {
//  console.log("Hello");
// }

// function mySecond() {
//   console.log("Goodbye");
// }
// mySecond();
// myFirst();


// const aa = {
// 	full: function(a1,b1){
// 		return this.first_name + " " + this.last_name + " " + a1 + " " + b1
// 	}
// }

// const bb = {
// 	first_name: 'naga',
// 	last_name: 'vardhan',
// }

// // let out = aa.full.call(bb)
// // console.log(out)

// let out1 = aa.full.apply(bb,['prani','ks'])
// console.log(out1)




let a = [1,1,1,2,2,2,6,6,6,3,3,5,6,7,8,6,4,32,5]

let b = {}
b.push(a[0])
for(i of a){
	if(b[i]){
		b[i]+=1
	}
	else{
		b[i]=1
	}
}
console.log(b)





// function createArray(N) {
//     let newArr = [];
//     for (let i = 1; i <= N; i++) {
//         newArr.push(i);
//     }
//     return newArr;
// }
// let arr = createArray(100);
// // console.log(arr)
// for (i of arr){
// 	if(i in a){
// 		count = 0
// 		for(let j=0;j<a.length-1;j++){
// 			if (i==a[j]){
// 				count+=1
// 		}
		
// 		}
// 	}
// 	if (count>0){
// 			console.log(`the string has number ${i} in total of ${count}`)
// 		}
// }

