function keyBoard() {

    let arrEnKeysRow1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'];
    let arrEnKeysRow2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'Del'];
    let arrEnKeysRow3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
    let arrEnKeysRow4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ᐃ', 'Shift'];
    let arrKeysRow5 = ['Ctrl', 'Win', 'Alt', ``, 'Alt', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'];
    let arrEnSpecKeys = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'BackSpace'];

    let arrRuKeysRow1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'];
    let arrRuKeysRow2 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "/", 'Del'];
    let arrRuKeysRow3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter'];
    let arrRuKeysRow4 = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ᐃ', 'Shift'];
    let arrRuSpecKeys = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'BackSpace'];

    function createElm(el, tag, classTag, inner) {
        el = document.createElement(tag);
        el.className = classTag;
        document.body.append(el);
        if (inner) {
            el.innerHTML = inner;
        }
    }

    createElm('header', 'header', 'header', "ВИРТУАЛЬНАЯ КЛАВИАТУРА");
    createElm('textArea', 'textarea', 'textarea');
    createElm('keyBoard', 'div', 'keyboard');

    for (let i = 0; i < 5; i++) {
        let keyboardItem = document.querySelector(".keyboard");
        let keyboardRow = document.createElement('div');

        keyboardRow.className = "keyboard__row";
        keyboardItem.prepend(keyboardRow);

        let keyRow = document.querySelector('.keyboard__row');

        function addRowKeys(rowName) {
            for (let j = 0; j < rowName.length; j++) {
                let keyCreateElm = document.createElement('div');
                keyCreateElm.className = 'keyboard__row_key';
                keyCreateElm.classList.add(`${'Key' + rowName[j].toUpperCase()}`);
                keyCreateElm.innerHTML = rowName[j];
                keyRow.append(keyCreateElm);
            }
        }

        switch (i) {
            case 0:
                addRowKeys(arrKeysRow5);
                break;

            case 1:
                for (let j = 0; j < arrEnKeysRow4.length; j++) {
                    let keyCreateElm = document.createElement('div');
                    keyCreateElm.className = 'keyboard__row_key';
                    keyCreateElm.classList.add(`${'Key' + arrEnKeysRow4[j].toUpperCase()}`);
                    keyCreateElm.innerHTML = arrEnKeysRow4[j];
                    keyRow.append(keyCreateElm);

                    if (j == 0) {
                        keyCreateElm.classList.add('KeySHIFT_L');
                    }
                    if (j == 12) {
                        keyCreateElm.classList.add('KeySHIFT_R');
                    }
                }
                break;

            case 2:
                addRowKeys(arrEnKeysRow3);
                break;

            case 3:
                addRowKeys(arrEnKeysRow2);
                break;

            case 4:
                addRowKeys(arrEnKeysRow1);
                break;
        }

    }

    function print() {
        let textArea = document.querySelector('.textarea');
        let keyBtn = document.querySelectorAll('.keyboard__row_key');

        for (let k of keyBtn) {
            if (!k.classList.contains('KeyBACKSPACE') && !k.classList.contains('KeyTAB') && !k.classList.contains('KeyDEL') && !k.classList.contains('KeyCAPSLOCK') && +
                !k.classList.contains('KeyENTER') && !k.classList.contains('KeySHIFT') && !k.classList.contains('KeyCTRL') && !k.classList.contains('KeyWIN') && !k.classList.contains('KeyALT') && +
                !k.classList.contains('Keyᐃ') && !k.classList.contains('Keyᐊ') && !k.classList.contains('Keyᐁ') && !k.classList.contains('Keyᐅ')) {
                k.onclick = () => {
                    textArea.textContent += k.textContent;
                    if (k.classList.contains('Key')) { textArea.textContent += ' '; }
                }
            }
        }
    }

    print();

   /* function KBPress() {

        let keyPh = document.querySelectorAll('.keyboard__row_key');
        let textArea = document.querySelector('.textarea');
        let arrKeys = Array.from(keyPh);

        document.addEventListener('keydown', (event) => {
            event.preventDefault();
            const key = arrKeys.find(it =>
                it.classList.contains(event.code))
            key.classList.add('active');
            textArea.textContent += key.textContent;
            console.log(key.textContent);
        });*/

        /*document.addEventListener('keyup', (event) => {
            arrKeys.find(it => {
                if (it.classList.contains(event.code) == true) {;
                    it.classList.remove('active');
                };
            })
        });*/
   // }

    //KBPress();

    createElm('description', 'div', 'description', "Клавиатура создана в операционной системе Windows </br> Для переключения языка комбинация: левые shift + alt");
};

keyBoard();




/*document.addEventListener('keydown', (event) => {
    const key = arrKeys.find(it => {
        if (it.classList.contains(event.code) == true) {
            it.classList.add('active');
            textArea.textContent += 
        };
    })
});*/