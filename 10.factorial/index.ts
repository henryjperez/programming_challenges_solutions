function FirstFactorial(num) { 
	const factorials = [];
	for (let i = num; i > 0; i--) {
		factorials.push(i);
	}
	return factorials.reduce((prev, current) => prev * current, 1);
}
   
// keep this function call here 
console.log(FirstFactorial(readline()));
