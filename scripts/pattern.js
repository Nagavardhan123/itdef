// function pattern(n) 
// {
// 	for (let i = 1; i <= n; i++) { 
// 		let k = i; 
// 		let b = ''
// 		for (let j = 1; j <= i; j++) { 
// 			b+=(k+" "); 
// 			k = k + n - j; 
// 		} 
// 		console.log(b) 
// 	}	
// }
// let n = 5; 
// pattern(n); 




let n = 5
for(let i=1;i<=n;i++){
	let k = i
	var out =''
	for(let j=1;j<=i;j++){
		out += k+' '
		k = k+n-j
	}
	console.log(out)
}






























