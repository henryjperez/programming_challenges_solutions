function birthdayCakeCandles(candles: number[]): number {
    const innerCandles = [...candles];
    innerCandles.sort((a, b) => a - b);
    
    const tallest = innerCandles.filter(e => e === innerCandles[innerCandles.length - 1]);
    return tallest.length;
}

const input = [4, 3, 1, 4]; // output 2 // There are 2 of the highest numbers (in this case 4)
const result = birthdayCakeCandles(input);

console.log(
    "Given this values:\n",
    input,
    "\nResult:",
    result,
);