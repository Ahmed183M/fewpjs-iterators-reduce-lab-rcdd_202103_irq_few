const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let sum = 0;
batteryBatches.reduce(item=>sum+=item);
let totalBatteries = sum;