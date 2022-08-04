function gastoConIva(entrynum) {
    return entrynum + (0.21 * entrynum);}

    function map(narray, callback) {
    var total = [];
    for (const nro in narray) {
        total.push(callback(Number(narray[nro])));}
    return total;}

var nros = [45, 56, 156, 248.5, 1001, 973, 350.8, 400, 525, 812];
var numsConIva = map(nros, gastoConIva);

console.table(numsConIva);
