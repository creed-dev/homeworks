//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
        if (event == 1) {
            var answer1 = new Answer(works.a00, works.a1);
        }
        else {
            var answer1 = new Answer(works.a00, works.a2);
        }
        answers.push(answer1);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                if (event == 1) {
                    var answer2 = new Answer(works.b00, works.b1);
                }
                else {
                    var answer2 = new Answer(works.b00, works.b2);
                }
                answers.push(answer2);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (event == 1) {
                            var answer3 = new Answer(works.d00, works.d1);
                        }
                        else {
                            var answer3 = new Answer(works.d00, works.d2);
                        }
                        answers.push(answer3);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (event == 1) {
                            var answer4 = new Answer(works.d00, works.d1);
                        }
                        else {
                            var answer4 = new Answer(works.d00, works.d2);
                        }
                        answers.push(answer4);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
                if (event == 1) {
                    var answer5 = new Answer(works.c00, works.c1);
                }
                else {
                    var answer5 = new Answer(works.c00, works.c2);
                }
                answers.push(answer5);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (event == 1) {
                            var answer6 = new Answer(works.d00, works.d1);
                        }
                        else {
                            var answer6 = new Answer(works.d00, works.d2);
                        }
                        answers.push(answer6);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (event == 1) {
                            var answer7 = new Answer(works.d00, works.d1);
                        }
                        else {
                            var answer7 = new Answer(works.d00, works.d2);
                        }
                        answers.push(answer7);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

do {
    var repeat = +prompt("Введите номер вопроса, чтобы увидеть его текст и Ваш ответ");
    switch(repeat) {
        case 1: 
            alert("Вопрос: "+answers[0].vopros +"\n Ваш ответ: "+answers[0].otvet);
            break;
        case 2:
            alert("Вопрос: "+answers[1].vopros +"\n Ваш ответ: "+answers[1].otvet);
            break;
        case 3:
            alert("Вопрос: "+answers[2].vopros +"\n Ваш ответ: "+answers[2].otvet);
            break;
        default:
            alert("Всего было 3 вопроса");
            break;
    }
} while(repeat < 1 || repeat > 3);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function Answer(vopros, otvet) {
    this.vopros = vopros;
    this.otvet = otvet;
}


