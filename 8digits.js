const fs = require('fs');

function generatePhoneNumbers() {
    const start = 602747214;  // Start at 0600000000, without leading 0
    const end = 699999999;    // End at 099999999, without leading 0
    const stream = fs.createWriteStream('./phoneNumbers602747214.txt');

    for (let i = start; i <= end; i++) {
        stream.write('0' + i.toString().padStart(9, '0') + '\n');
    }

    stream.end();
}

generatePhoneNumbers();
console.log('Phone numbers generated and written to phoneNumbers.txt');