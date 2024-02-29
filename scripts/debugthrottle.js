let throttleTime = 0;
function throttle(func, limit) {
	return function(event){
	const currentTime = new Date().getTime();
	if (currentTime - throttleTime >= limit) {
		func(event);
		throttleTime = currentTime;
		}
	}
}


// let debounceTimeout;
// function debounce(func, delay){
// 	return function(event){	
// 		clearTimeout(debounceTimeout);
// 		debounceTimeout = setTimeout(() =>{
// 		func(event);
// 		}, delay);
// 	}
// }


const throttledFunction = throttle((event) => console.log('Throttled:', event.target.value), 1000);
// const debouncedFunction = debounce((event) => console.log('Debounced:', event.target.value), 1000);
// Attach event listeners
// document. getElementById('inputField').addEventListener('input', throttledFunction); 
// document.getElementById('inputField').addEventListener('input', debouncedFunction);