class Product {
    constructor(name, price, quantity, description) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.description = description
    }
}


let arraiProduct = [new Product('pen', 20, 50, 'blue pen'),
new Product('pencil', 3, 20, 'grey pencil'), 
new Product('eraser', 2, 100, 'small eraser'),
new Product('ruler', 4, 30, 'ruler 30 centimeter')]


function findProduct(arrai, str) {
    if (typeof str != 'string') {
        return "Фильтр должен быть строкой";
    }

    for (let val of arrai) {
        if (!val instanceof Product) {
            return "В массиве должны быть объекты только класса Product!";
        }
    }

    let condithins = str.split('&');
    let result = [];

    next_obj: for (let obj of arrai) {
        for (let rule of condithins) {
            rule = rule.split('-');

            if (rule[0] == 'name' || rule[0] == 'description') {
                if (rule[1] == 'contains') {
                    if (obj[rule[0]].includes(rule[2])) {
                        continue;
                    } else {
                        continue next_obj;
                    }
                }

                if (rule[1] == 'starts') {
                    if (obj[rule[0]].startsWith(rule[2])) {
                        continue;
                    } else {
                        continue next_obj;
                    }
                }

                if (rule[1] == 'ends') {
                    if (obj[rule[0]].endsWith(rule[2])) {
                        continue;
                    } else {
                        continue next_obj;
                    }
                }
            }

            if (rule[0] == 'price' || rule[0] == 'quantity') {
                let operator = rule[1].replace(/\d+/g,'');
                let amount = rule[1].replace(/[>=<]+/g,'');

                if (eval(`${obj[rule[0]]} ${operator} ${amount}`)) {
                    continue;
                } else {
                    continue next_obj;
                    }
            }
        }
        result.push(obj);
    }

    return result;
}

console.log(findProduct(arraiProduct, 'name-contains-er&price->=2&quantity->5&description-ends-ser' ))