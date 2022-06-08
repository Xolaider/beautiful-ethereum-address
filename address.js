const ethers = require('ethers');  
const crypto = require('crypto');
let done = false;
let counter = 1;
let now = new Date()

const main = (yourSymbols) => {
    console.log(counter)
    counter++
    const id = crypto.randomBytes(32).toString('hex');
    const privateKey = "0x"+id;
    const wallet = new ethers.Wallet(privateKey);
    const address = wallet.address
    const addressFirstSymbols = address.slice(0, yourSymbols.length+2)
    if (addressFirstSymbols.toLowerCase() === '0x'+yourSymbols.toLowerCase()) {
        console.log('address:', wallet.address, '\nprivate key:', id, '\nsearching time:', (new Date-now)/1000, 'seconds')
        return true
    }
    return false;
}

do {
    done = main('00000')
}
while (!done);
