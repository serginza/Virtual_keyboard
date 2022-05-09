function keyBoard() {

    const arrEnKeysRow1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'];  
    const arrEnKeysRow2 = ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'del'];
    const arrEnKeysRow3 = ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter'];
    const arrEnKeysRow4 = ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ᐃ', 'shift'];
    const arrKeysRow5 = ['ctrl', 'win', 'alt', ` `, 'alt', 'ᐊ', 'ᐁ', 'ᐅ', 'ctrl'];

    const arrEnSpecKeys1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'];
    const arrEnSpecKeys2 = ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', "|", 'del'];
    const arrEnSpecKeys3 = ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'enter'];
    const arrEnSpecKeys4 = ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'ᐃ', 'shift'];

    const arrRuKeysRow1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'];
    const arrRuKeysRow2 = ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\", 'del'];
    const arrRuKeysRow3 = ['capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'enter'];
    const arrRuKeysRow4 = ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ᐃ', 'shift'];
    const arrRuSpecKeys1 = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'];

    const arrCodeKeysRow1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
    const arrCodeKeysRow2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', "Backslash", 'Delete'];
    const arrCodeKeysRow3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', "Quote", 'Enter'];
    const arrCodeKeysRow4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
    const arrCodeKeysRow5 = ['ControlLeft', 'Win', 'AltLeft', `Space`, 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];  

    function createElm(el, tag, classTag, inner) {                          //Создание Тегов и отрисовка клавиатуры
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

    function nameBtn() {
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
    };


    function printBtn() {                                                      //отображение символов при нажатии на кнопки ВиртКлавы
        let textArea = document.querySelector('.textarea');
        let keyBtn = document.querySelectorAll('.keyboard__row_key');

        for (let k of keyBtn) {
            if (!k.classList.contains('Delete') && !k.classList.contains('Win') && !k.classList.contains('ArrowUp') && +
            !k.classList.contains('ArrowLeft') && !k.classList.contains('ArrowDown') && !k.classList.contains('ArrowRight')) {
                k.onclick = () => {
                    textArea.textContent += k.textContent;
                    switch (true) {

                        case (k.classList.contains('Enter')):
                            textArea.textContent = textArea.textContent.slice(0, -5) + '\n' 
                        break;
                        
                        case (k.classList.contains('Backspace')):
                            textArea.textContent = textArea.textContent.slice(0, -10);
                        break;

                        case (k.classList.contains('Tab')):
                            textArea.textContent = textArea.textContent.slice(0, -3) + '     ';
                        break;

                        case (k.classList.contains('CapsLock')):
                            k.classList.toggle('active');
                            textArea.textContent = textArea.textContent.slice(0, -8);
                        break;

                        case (k.classList.contains('AltLeft')) || (k.classList.contains('AltRight')):
                            k.classList.toggle('active');
                            textArea.textContent = textArea.textContent.slice(0, -3);
                        break;

                        case (k.classList.contains('ControlLeft')) || (k.classList.contains('ControlRight')):
                            k.classList.toggle('active');
                            textArea.textContent = textArea.textContent.slice(0, -4);
                        break;

                        case (k.classList.contains('ShiftLeft')) || (k.classList.contains('ShiftRight')):
                            k.classList.toggle('active');
                            textArea.textContent = textArea.textContent.slice(0, -5);
                        break;
                    };
                };
                
                let caps = document.querySelector('.CapsLock');
                let ShiftL = document.querySelector('.ShiftLeft');
                let ShiftR = document.querySelector('.ShiftRight');
                let CtrlL = document.querySelector('.ControlLeft');
                let AltL = document.querySelector('.AltLeft');

                document.addEventListener('click', () => {                      //Смена языка (ctrl + alt) и(или) символов по нажатии на CapsLock, Shift

                    if ((!CtrlL.classList.contains('active')) || (!AltL.classList.contains('active'))) {

                        if ((ShiftL.classList.contains('active')) || (ShiftR.classList.contains('active'))) {
                            
                            for (let j = 0; j < arrEnSpecKeys1.length - 1; j++) {
                                if (k.classList.contains(arrCodeKeysRow1[j])) {
                                    k.textContent = k.textContent.slice(0, -1) + arrEnSpecKeys1[j];
                                };
                            };

                            for (let j = 1; j < arrCodeKeysRow2.length - 1; j++) {
                                if (k.classList.contains(arrCodeKeysRow2[j])) {
                                    k.textContent = k.textContent.slice(0, -1) + arrEnSpecKeys2[j];
                                };
                            };

                            for (let j = 1; j < arrCodeKeysRow3.length - 1; j++) {
                                if (k.classList.contains(arrCodeKeysRow3[j])) {
                                    k.textContent = k.textContent.slice(0, -1) + arrEnSpecKeys3[j];
                                };
                            };

                            for (let j = 1; j < arrCodeKeysRow4.length - 2; j++) {
                                if (k.classList.contains(arrCodeKeysRow4[j])) {
                                    k.textContent = k.textContent.slice(0, -1) + arrEnSpecKeys4[j];
                                };
                            };
                            k.textContent = k.textContent.toUpperCase();
                        } else {
                            //k.textContent = k.textContent.toLowerCase();
                            for (let j = 0; j < arrEnKeysRow1.length - 1; j++) {
                                if (k.classList.contains(arrCodeKeysRow1[j])) {
                                    k.textContent = k.textContent.slice(0, -1) + arrEnKeysRow1[j];
                                };
                            };

                            for (let j = 1; j < arrCodeKeysRow2.length - 1; j++) {
                                if (k.classList.contains(arrCodeKeysRow2[j])) {
                                    k.textContent = k.textContent.slice(0, -1) + arrEnKeysRow2[j];
                                };
                            };

                            for (let j = 1; j < arrCodeKeysRow3.length - 1; j++) {
                                if (k.classList.contains(arrCodeKeysRow3[j])) {
                                    k.textContent = k.textContent.slice(0, -1) + arrEnKeysRow3[j];
                                };
                            };

                            for (let j = 1; j < arrCodeKeysRow4.length - 2; j++) {
                                if (k.classList.contains(arrCodeKeysRow4[j])) {
                                    k.textContent = k.textContent.slice(0, -1) + arrEnKeysRow4[j];
                                };
                            };
                        };
                    } else {
                        for (let j = 0; j < arrEnKeysRow1.length - 1; j++) {
                            if (k.classList.contains(arrCodeKeysRow1[j])) {
                                k.textContent = k.textContent.slice(0, -1) + arrRuKeysRow1[j];
                            };
                        };
                        
                        for (let j = 1; j < arrEnKeysRow2.length - 1; j++) {
                            if (k.classList.contains(arrCodeKeysRow2[j])) {
                                k.textContent = k.textContent.slice(0, -1) + arrRuKeysRow2[j];
                            };
                        };

                        for (let j = 1; j < arrEnKeysRow3.length - 1; j++) {
                            if (k.classList.contains(arrCodeKeysRow3[j])) {
                                k.textContent = k.textContent.slice(0, -1) + arrRuKeysRow3[j];
                            };
                        };

                        for (let j = 1; j < arrEnKeysRow4.length - 2; j++) {
                            if (k.classList.contains(arrCodeKeysRow4[j])) {
                                k.textContent = k.textContent.slice(0, -1) + arrRuKeysRow4[j];
                            };
                        };

                        if (ShiftL.classList.contains('active')) {
                           
                            for (let j = 1; j < arrEnKeysRow1.length - 1; j++) {
                                if (k.classList.contains(arrCodeKeysRow1[j])) {
                                    k.textContent = k.textContent.slice(0, -1) + arrRuSpecKeys1[j];
                                };
                            };

                            if (k.classList.contains('Backslash')) {
                                k.textContent = k.textContent.slice(0, -1) + '/';
                            };

                            if (k.classList.contains('Slash')) {
                                k.textContent = k.textContent.slice(0, -1) + ',';
                            };

                        };
                    };

                    if ((caps.classList.contains('active')) || (ShiftL.classList.contains('active')) || (ShiftR.classList.contains('active'))) {
                        if (k.textContent !== 'ctrl' && k.textContent !== 'alt' && k.textContent !== 'capslock' && k.textContent !== 'shift' && k.textContent !== 'tab' && k.textContent !== 'enter' && k.textContent !== 'backspace') {
                            k.textContent = k.textContent.toUpperCase();
                        };
                    } else {
                        k.textContent = k.textContent.toLowerCase();
                    };
                });
            };
        };
    };
    nameBtn();
    printBtn();

    function KBPress() {                                                    //отображение символов при нажатии на кнопки ФизКлавы

        let keyPh = document.querySelectorAll('.keyboard__row_key');
        let textArea = document.querySelector('.textarea');
        let arrKeys = Array.from(keyPh);

        document.addEventListener('keydown', (event) => {
            event.preventDefault();
            textArea.focus();
            //if (!event.target.closest('.keyboard__row_key')) {return;};
            /*if (event.ctrlKey && event.altKey) {                          //Смена языка (Не доделано)
                alert('Rus');
                for (let x of keyPh) {
                    for (let j = 0; j < arrRuKeysRow1.length - 1; j++) {
                        if (x.classList.contains(arrCodeKeysRow1[j])) {
                            x.textContent = x.textContent.slice(0, -1) + arrRuKeysRow1[j];
                        };
                    };
                }
            }*/
            const key = arrKeys.find(it =>
                it.classList.contains(event.code))
            key.classList.add('active');
            textArea.focus();
            
            if (event.ctrlKey || event.shiftKey || event.altKey || event.code == 'CapsLock' || event.code == 'Tab' || event.code == 'Backspace' || event.code == 'Delete' || event.code == 'Enter') {
                textArea.textContent += '';
            } else {
                textArea.textContent += key.textContent;
            };
        });

        document.addEventListener('keyup', (event) => {
            //arrKeys.find(it => {
                const key = arrKeys.find(it =>
                    it.classList.contains(event.code))
                key.classList.remove('active');
                textArea.focus();
            });
        //});
    };

    KBPress();

    createElm('description', 'div', 'description', "Клавиатура создана в операционной системе Windows </br> Для переключения языка комбинация: левые alt + ctrl");
};

keyBoard();