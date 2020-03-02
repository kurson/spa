// boki trójkąta
a = 3;
b = 4;
c = 5;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let heron = (a, b, c) => Math.sqrt(
    (a + b + c) * (a + b - c) * (a - b + c) * (-a + b +c)
) / 4;

console.log( '' + heron(a, b, c) );