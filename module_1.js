function makeRightCase(word) {
    return word[0].toUpperCase() + word.slice(1,).toLowerCase();
}


console.log(makeRightCase('SDWFw'));


function countWords(str) {
    return str.match(/[a-zа-я]+/gi).length;
}


console.log(countWords('  fwfwfZZ,     fwf.,. цацпап 134  rfsw !'))


function countUniqueWords(str) {
    let massWords = str.match(/[a-zа-я]+/gi).map((word) => {
        return word.toLowerCase()
    });
    let result = [];
    let counter;


    for (uniqe of new Set(massWords)) {
        counter = 0;
        for (word of massWords) {
            if (uniqe == word) {
                counter++;
            }
        }

        let endingOfWord = [2, 3, 4].includes(counter) ? 'раза' : 'раз';

        result.push(`${uniqe} - ${counter} ${endingOfWord}`)
    }
    return result.sort((a, b) => b.replace(/\D+/g,"")
           - a.replace(/\D+/g,"")).join(', ');
}


function makeRightSpace(str) {
    let result = str.replace(/ +([\.,!\?])/g, '$1') // убираем пробелы перед знаками
                    .replace(/([\.,!\?])/g, '$1 ' ) // добавляем пробел после знаков
                    .replace(/\s+/g, ' '); // удаляем все лишнее проеблы


    return result;
}

console.log(makeRightSpace("Вот              пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены."))
