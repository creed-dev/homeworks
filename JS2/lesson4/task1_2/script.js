let str = `Я тебе приказываю: 'Оставь брата в покое, пусть сам aren't со своей жизнью.'`;

const regExp = /\'/gm;
const regExp2 = /\b\"\b/gm;

let strFormat = str.replace(regExp, '"');
strFormat = strFormat.replace(regExp2, "'");
console.log(strFormat);
