var son1 = +prompt("Birinchi sonni kirit");
var amal = prompt("Amalni kirit");
var son2 = +prompt("Ikkinchi sonni kirit");

var natija;

switch (amal) {
    case '+':
        natija = son1 + son2;
        break;
    case '-':
        natija = son1 - son2;
        break;
    case '*':
        natija = son1 * son2;
        break;
    case '/':
        if (son2 !== 0) {
            natija = son1 / son2;
        } else {
            natija = "nolga bo'lish mumkin emas";
        }
        break;
    default:
        natija = "Notogri amal";
}

console.log("natija:", natija);
