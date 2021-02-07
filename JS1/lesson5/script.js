function chess() {
    var table = document.createElement("table");
var tr,td;
var flag = true;
var arr = {
    0: ['a','b','c','d','e','f','g','h'],
};
let figure = {
    0 : ['-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-150px -16px','-372px -17px', '-484px -22px','-263px -19px'],
    1 : ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px','-595px -19px', '-595px -19px','-595px -19px'],
    6 : ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px','-595px -116px', '-595px -116px','-595px -116px'],
    7 : ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -116px', '-150px -116px','-372px -116px', '-484px -116px','-263px -116px'],
};

for(var i = 0;i < 8;i++) {
    tr = document.createElement("tr");
    var td = document.createElement('td');
    td.innerHTML = 8 - i;
    tr.appendChild(td);
    table.append(tr);
    for(var j = 0;j < 8;j++) {
        if(j == 0) flag = !flag;
        td = document.createElement("td");
        if (flag) td.setAttribute("style", "border: 1px solid black; padding: 35px; background: brown;");
        else td.setAttribute("style", "border: 1px solid black; padding: 35px; background: white;");
        if(figure[i] !== undefined && figure[i][j] !== undefined) {
            td.style.backgroundImage = 'url(сhess_symbols_set_.png)';
            td.style.backgroundPosition = figure[i][j];
        }
        tr.append(td);
        flag = !flag;
    }
}

table.setAttribute("style", "border-collapse: collapse;");
document.getElementsByTagName("div")[0].append(table);
}

chess();