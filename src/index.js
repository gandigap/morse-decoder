const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arraySymbols = [];

    for (let i = 0; i < expr.length / 10; i++) {
        arraySymbols.push(expr.slice(i * 10, (i * 10) + 10));
    }

    let arrayResult = [];
    let arrayMarks = [];

    for (let i = 0; i < arraySymbols.length; i++) {
        let letter = arraySymbols[i];
        if (letter === '**********') {
            arrayResult.push(' ');
        } else {
            for (let k = 0; k < letter.length / 2; k++) {
                let mark = letter.slice(k * 2, (k * 2) + 2);

                if (mark === '11') {
                    arrayMarks.push('-');
                } else if (mark === '10') {
                    arrayMarks.push('.');
                } else {
                    arrayMarks.push('');
                }
            }

            let morseMark = arrayMarks.join('');
            arrayMarks = [''];
            arrayResult.push(MORSE_TABLE[morseMark]);
        }
    }

    return arrayResult.join('');
}

module.exports = {
    decode
}