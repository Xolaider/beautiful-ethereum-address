var ethers = require('ethers');  
var crypto = require('crypto');
let done = false;
let counter = 1;
const main = () => {
    console.log(counter)
    counter++
    var id = crypto.randomBytes(32).toString('hex');
    var privateKey = "0x"+id;
    var wallet = new ethers.Wallet(privateKey);
 
    const address = wallet.address
    const addressFirstSymbols = address.slice(0, 6)
//    if (address.includes('0000')) {
    if (addressFirstSymbols.toLowerCase() === '0xeb10') {
        console.log('address', wallet.address, 'private key', id)
        return true
    }
    return false;
}
//main()
do {
    done = main()
}
while (!done);

// var id = crypto.randomBytes(32).toString('hex');
// var privateKey = "0x"+id;
// console.log("SAVE BUT DO NOT SHARE THIS:", privateKey);

// var wallet = new ethers.Wallet(privateKey);
// console.log("Address: " + wallet.address);