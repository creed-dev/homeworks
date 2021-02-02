var event, ok;

do {
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);

switch(event) {
    case 1:
        alert("К сожалению, это неверный ответ, вы проиграли");
        break;
    case 2:
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
           
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch(event) {
            case 1:
                do {
                    ok = false;
                    event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
                   
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.c0, event);
                    }
                } while (!ok);
                switch(event) {
                    case 1:
                        alert("К сожалению, это неверный ответ, вы проиграли");
                        break;
                    case 2:
                        do {
                            ok = false;
                            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                           
                            if (event == -1) {
                                break;
                            }
                            else {
                                ok = isAnswer(works.d0, event);
                            }
                        } while (!ok);
                        switch(event) {
                            case 1:
                                alert("К сожалению, это неверный ответ, вы проиграли");
                                break;
                            case 2:
                                alert("Поздравляем, вы победили!");
                                break;
                        }
                }
                break;
            case 2:
                alert("К сожалению, это неверный ответ, вы проиграли");
                break;
        }
}

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

