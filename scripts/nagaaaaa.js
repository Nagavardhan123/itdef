let time1 = 0
function throttle(funn, limitter){
	return function(event){
		let now = new Date().getTime()
		if (now - time1 >= limitter){
			funn(event)
			time = now
		}
	}
}

// let throttleTime = 0;
// function throttle(func, limit) {
// 	return function(event){
// 	const currentTime = new Date().getTime();
// 	if (currentTime - throttleTime >= limit) {
// 		func(event);
// 		throttleTime = currentTime;
// 		}
// 	}
// }

let out = throttle((event)=>console.log('outut: ',event.apply.value), 1000)