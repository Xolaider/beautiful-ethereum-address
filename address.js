var ethers = require('ethers');  
var crypto = require('crypto');
let done = false;
let counter = 1;
const main = (yourSymbols) => {
    console.log(counter)
    counter++
    const id = crypto.randomBytes(32).toString('hex');
    const privateKey = "0x"+id;
    const wallet = new ethers.Wallet(privateKey);
    const address = wallet.address
    const addressFirstSymbols = address.slice(0, yourSymbols.length+2)
    if (addressFirstSymbols.toLowerCase() === '0x'+yourSymbols.toLowerCase()) {
        console.log('address:', wallet.address, '\nprivate key:', id)
        return true
    }
    return false;
}

do {
    done = main('000')
}
while (!done);
