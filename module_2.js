/* для большей точности и хранения чисел большой длины лучше 
представлять числа в виде строк. потом менять их тип на BigInt*/

function addBigNums(a=0, b=0) {
    let first = a ? a : prompt("Введите первое число", 0);
    let second = b ? b: prompt("Введите второе число", 0);

    return BigInt(first) + BigInt(second);
}


function subtractBigNums(a=0, b=0) {
    let first = a ? a : prompt("Введите первое число", 0);
    let second = b ? b: prompt("Введите второе число", 0);

    return BigInt(first) - BigInt(second);
}


function multiplyBigNums(a=0, b=0) {
    let first = a ? a : prompt("Введите первое число", 0);
    let second = b ? b: prompt("Введите второе число", 0);

    return BigInt(first) * BigInt(second);
}


function divideBigNums(a=0, b=0) {
    let first = a ? a : prompt("Введите первое число", 0);
    let second = b ? b: prompt("Введите второе число", 0);

    return BigInt(first) / BigInt(second);
}
