function keyBoard() {

    const arrEnKeysRow1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'];  
    const arrEnKeysRow2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'Del'];
    const arrEnKeysRow3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
    const arrEnKeysRow4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ᐃ', 'Shift'];
    const arrKeysRow5 = ['Ctrl', 'Win', 'Alt', ``, 'Alt', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'];
    const arrEnSpecKeys = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'BackSpace'];

    const arrRuKeysRow1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'];
    const arrRuKeysRow2 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "/", 'Del'];
    const arrRuKeysRow3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter'];
    const arrRuKeysRow4 = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ᐃ', 'Shift'];
    const arrRuSpecKeys = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'BackSpace'];

    const arrCodeKeysRow1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
    const arrCodeKeysRow2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', "Backslash", 'Delete'];
    const arrCodeKeysRow3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', "Quote", 'Enter'];
    const arrCodeKeysRow4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
    const arrCodeKeysRow5 = ['ControlLeft', 'Win', 'AltLeft', `Space`, 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
    //const arrEnSpecKeys = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'BackSpace'];  

    function createElm(el, tag, classTag, inner) {                          //Создание Тегов
        el = document.createElement(tag);
        el.className = classTag;
        document.body.append(el);
        if (inner) {
            el.innerHTML = inner;
        }
    };

    createElm('header', 'header', 'header', "ВИРТУАЛЬНАЯ КЛАВИАТУРА");
    createElm('textArea', 'textarea', 'textarea');
    createElm('keyBoard', 'div', 'keyboard');

    for (let i = 0; i < 5; i++) {                                           //присвоение классов и символов кнопкам ВиртКлавы      
        let keyboardItem = document.querySelector(".keyboard");
        let keyboardRow = document.createElement('div');

        keyboardRow.className = "keyboard__row";
        keyboardItem.prepend(keyboardRow);

        let keyRow = document.querySelector('.keyboard__row');

        function addRowKeys(rowName, className) {
            for (let j = 0; j < rowName.length; j++) {
                let keyCreateElm = document.createElement('div');
                keyCreateElm.className = 'keyboard__row_key';
                keyCreateElm.classList.add(className[j]);
                keyCreateElm.innerHTML = rowName[j];
                keyRow.append(keyCreateElm);
            };
        };

        switch (i) {
            case 0:
                addRowKeys(arrKeysRow5, arrCodeKeysRow5);
                break;

            case 1:
                addRowKeys(arrEnKeysRow4, arrCodeKeysRow4);
                break;

            case 2:
                addRowKeys(arrEnKeysRow3, arrCodeKeysRow3);
                break;

            case 3:
                addRowKeys(arrEnKeysRow2, arrCodeKeysRow2);
                break;

            case 4:
                addRowKeys(arrEnKeysRow1, arrCodeKeysRow1);
                break;
        };

    };

    function print() {                                                      //отображение символов при нажатии на кнопки ВиртКлавы
        let textArea = document.querySelector('.textarea');
        let keyBtn = document.querySelectorAll('.keyboard__row_key');

        for (let k of keyBtn) {
            if (!k.classList.contains('Backspace') && !k.classList.contains('Tab') && !k.classList.contains('Delete') && !k.classList.contains('CapsLock') && +
            !k.classList.contains('Enter') && !k.classList.contains('ShiftLeft') && !k.classList.contains('ShiftRight')&& !k.classList.contains('ControlLeft') && +
            !k.classList.contains('ControlRight') && !k.classList.contains('Win') && !k.classList.contains('AltLeft') && !k.classList.contains('AltRight') && + 
            !k.classList.contains('ArrowUp') && !k.classList.contains('ArrowLeft') && !k.classList.contains('ArrowDown') && !k.classList.contains('ArrowRight')) {
                k.onclick = () => {
                    textArea.textContent += k.textContent;
                    if (k.classList.contains('Space')) { 
                        textArea.textContent += ' '; 
                    };
                };
            };
        };
    };

    print();

    function KBPress() {                                                    //отображение символов при нажатии на кнопки ФизКлавы

        let keyPh = document.querySelectorAll('.keyboard__row_key');
        let textArea = document.querySelector('.textarea');
        let arrKeys = Array.from(keyPh);

        document.addEventListener('keydown', (event) => {
            //event.preventDefault();
            const key = arrKeys.find(it =>
                it.classList.contains(event.code))
            key.classList.add('active');
            textArea.textContent += key.textContent;
        });

        document.addEventListener('keyup', (event) => {
            arrKeys.find(it => {
                const key = arrKeys.find(it =>
                    it.classList.contains(event.code))
                key.classList.remove('active');
            });
        });
    };

    KBPress();

    createElm('description', 'div', 'description', "Клавиатура создана в операционной системе Windows </br> Для переключения языка комбинация: левые shift + alt");
};

keyBoard();




   /* //addClassSpecKeys('.Key`', 'Backquote');
    addClassSpecKeys(".Key1", 'Digit1');
    addClassSpecKeys(".Key2", 'Digit2');
    addClassSpecKeys(".Key3", 'Digit3');
    addClassSpecKeys(".Key4", 'Digit4');
    addClassSpecKeys(".Key5", 'Digit5');
    addClassSpecKeys(".Key6", 'Digit6');
    addClassSpecKeys(".Key7", 'Digit7');
    addClassSpecKeys(".Key8", 'Digit8');
    addClassSpecKeys(".Key9", 'Digit9');
    addClassSpecKeys(".Key0", 'Digit0');
    addClassSpecKeys(".Key-", 'Minus');
    //addClassSpecKeys('.Key=', 'Equal');
    //addClassSpecKeys(".Key[", 'BracketLeft');
    //addClassSpecKeys(".Key]", 'BracketRight');
    //addClassSpecKeys(".Key\\", 'Backslash');
    //addClassSpecKeys(".Key;", 'Semicolon');
    //addClassSpecKeys(".Key'", 'Quote');*/

                    /*for (let j = 0; j < arrEnKeysRow4.length; j++) {
                    let keyCreateElm = document.createElement('div');
                    keyCreateElm.className = 'keyboard__row_key';
                    keyCreateElm.classList.add(`${'Key' + arrEnKeysRow4[j].toUpperCase()}`);
                    keyCreateElm.innerHTML = arrEnKeysRow4[j];
                    keyRow.append(keyCreateElm);

                    switch (j) {
                        case 0:
                            keyCreateElm.classList.add('KeySHIFT_L');
                            break;

                        case 8:
                            keyCreateElm.classList.add('Comma');
                            break;

                        case 9:
                            keyCreateElm.classList.add('Period');
                            break;

                        case 10:
                            keyCreateElm.classList.add('Slash');
                            break;

                        case 12:
                            keyCreateElm.classList.add('KeySHIFT_R');
                        break;
                    }
                }*/


                    /*function addClassSpecKeys(oldClass, codeClass) {                        //присвоение классов с кодом кнопки для "особых" кнопок
        let specKey = document.querySelector(oldClass);
        specKey.classList.add(codeClass);
    }*/