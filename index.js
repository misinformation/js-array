//for (let i = 0; i <= 50; i = i + 2) {
//  console.log(i);
//}

//let i = 0;
//while (i < 100) {
//  console.log(i);
//  i++;
//}

//do {
//  console.log(i);
//  i++;
//} while (i < 100)

const products = ['Tesla X', 'Ford F150'];
products[2] = 'Ferrari LaFerrari';
products.push('Lamborghini Hurracane');
products.push('Renault Zoe');
products[10] = 'Lexus NX 200t';

console.log(products.length);

//for (let i = 0; i < products.length; i++) {
//  console.log(products[i]);
//}

// for (let i = 0; i < products.length; i++) {
//   printEl(products[i]);
// }

//products.forEach(printEl);


//function printEl(el) {
//  console.log(el);
//}

//стрілочна функція
products.forEach(el => console.log(el));

gdfg

