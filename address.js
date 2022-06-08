var ethers = require('ethers');  
var crypto = require('crypto');
let done = false;
let counter = 1;
const main = (yourSymbols) => {
    console.log(counter)
    counter++
    var id = crypto.randomBytes(32).toString('hex');
    var privateKey = "0x"+id;
    var wallet = new ethers.Wallet(privateKey);
    const address = wallet.address
<<<<<<< HEAD
    const addressFirstSymbols = address.slice(0, yourSymbols.length+2)
    if (addressFirstSymbols.toLowerCase() === '0x'+yourSymbols.toLowerCase()) {
        console.log('address:', wallet.address, '\nprivate key:', id)
=======
    const addressFirstSymbols = address.slice(0, 6)
    if (addressFirstSymbols.toLowerCase() === '0x0000') {
        console.log('address', wallet.address, 'private key', id)
>>>>>>> 590385a70e437f7357a994d371e31907cb98b735
        return true
    }
    return false;
}

do {
    done = main('000')
}
while (!done);
<<<<<<< HEAD
=======

>>>>>>> 590385a70e437f7357a994d371e31907cb98b735
