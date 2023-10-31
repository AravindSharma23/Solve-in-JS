//Birthday cake candle - Hacker rank Problem

function birthdayCakeCandles(candles) {
    // Write your code here
    let tallestNum = Math.max(...candles);
    let count = 0;
    for(let i=0;i<candles.length;i++){
        if(tallestNum == candles[i]){
            count++;
        }
    } 
    return count;

}
