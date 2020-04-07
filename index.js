class Key {

	constructor(name, engLetterDown, engLetterUp, rusLetterDown, rusLetterUp, serviceKeyName) {
		this.name = name;
		this.engLetterDown = engLetterDown;
		this.engLetterUp = engLetterUp;
		this.rusLetterDown = rusLetterDown;
		this.rusLetterUp = rusLetterUp;
		this.serviceKeyName = serviceKeyName;
	}

	createKey(row) {
		const key = document.createElement('div');
		key.classList.add('key');
		key.classList.add(this.name);
		if (this.serviceKeyName) {
			const serviceKey = document.createElement('span');
			serviceKey.classList.add('service_key');
			serviceKey.textContent = this.serviceKeyName;

			key.append(serviceKey);
		} else {
			const engSpan = document.createElement('span');
			engSpan.classList.add('eng');

			const rusSpan = document.createElement('span');
			rusSpan.classList.add('rus');

			const caseDownEng = document.createElement('span');
			caseDownEng.classList.add('eng_down');
			caseDownEng.textContent = this.engLetterDown;

			const caseUpEng = document.createElement('span');
			caseUpEng.classList.add('eng_up');
			caseUpEng.classList.add('hidden');
			caseUpEng.textContent = this.engLetterUp;

			const caseDownRus = document.createElement('span');
			caseDownRus.classList.add('rus_down');
			//		caseDownRus.classList.add('hidden');	// DEL			
			caseDownRus.textContent = this.rusLetterDown;

			const caseUpRus = document.createElement('span');
			caseUpRus.classList.add('rus_up');
			caseUpRus.classList.add('hidden');
			caseUpRus.textContent = this.rusLetterUp;

			key.append(engSpan, rusSpan);

			engSpan.append(caseDownEng, caseUpEng);
			rusSpan.append(caseDownRus, caseUpRus);
		}
		row.append(key);
	}
}

// row 1
const backquote = new Key('Backquote', '`', '~', 'ё', 'Ё');
const digit1 = new Key('Digit1', '1', '!', '1', '!');
const digit2 = new Key('Digit2', '2', '@', '2', '"');
const digit3 = new Key('Digit3', '3', '#', '3', '№');
const digit4 = new Key('Digit4', '4', '$', '4', ';');
const digit5 = new Key('Digit5', '5', '%', '5', '%');
const digit6 = new Key('Digit6', '6', '^', '6', ':');
const digit7 = new Key('Digit7', '7', '&', '7', '?');
const digit8 = new Key('Digit8', '8', '*', '8', '*');
const digit9 = new Key('Digit9', '9', '(', '9', '(');
const digit0 = new Key('Digit0', '0', ')', '0', ')');
const minus = new Key('Minus', '-', '_', '-', '_');
const equal = new Key('Equal', '=', '+', '=', '+');
const backspace = new Key('Backspace', '', '', '', '', 'Backspace');  // ?? как тут ??

// row 2
const tab = new Key('Tab', '', '', '', '', 'tab');  // ?? как тут ??
const keyQ = new Key('KeyQ', 'q', 'Q', 'й', 'Й');
const keyW = new Key('KeyW', 'w', 'W', 'ц', 'Ц');
const keyE = new Key('KeyE', 'e', 'E', 'у', 'У');
const keyR = new Key('KeyR', 'r', 'R', 'к', 'К');
const keyT = new Key('KeyT', 't', 'T', 'е', 'Е');
const keyY = new Key('KeyY', 'y', 'Y', 'н', 'Н');
const keyU = new Key('KeyU', 'u', 'U', 'г', 'Г');
const keyI = new Key('KeyI', 'i', 'I', 'ш', 'Ш');
const keyO = new Key('KeyO', 'o', 'O', 'щ', 'Щ');
const keyP = new Key('KeyP', 'p', 'P', 'з', 'З');
const bracketLeft = new Key('BracketLeft', '[', '{', 'х', 'Х');
const bracketRight = new Key('BracketRight', ']', '}', 'ъ', 'Ъ');
const backslash = new Key('Backslash', '\\', '\|', '\\', '\/');
// const Delete = new Key('Delete','delete','delete','delete','delete');

// row 3
const capsLock = new Key('CapsLock', '', '', '', '', 'caps lock');
const keyA = new Key('KeyA', 'a', 'A', 'ф', 'Ф');
const keyS = new Key('KeyS', 's', 'S', 'ы', 'Ы');
const keyD = new Key('KeyD', 'd', 'D', 'в', 'В');
const keyF = new Key('KeyF', 'f', 'F', 'а', 'А');
const keyG = new Key('KeyG', 'g', 'G', 'п', 'П');
const keyH = new Key('KeyH', 'h', 'H', 'р', 'Р');
const keyJ = new Key('KeyJ', 'j', 'J', 'о', 'О');
const keyK = new Key('KeyK', 'k', 'K', 'л', 'Л');
const keyL = new Key('KeyL', 'l', 'L', 'д', 'Д');
const semicolon = new Key('Semicolon', ':', ';', 'ж', 'Ж');
const quote = new Key('Quote', '\'', '"', 'э', 'Э');
const enter = new Key('Enter', '\n', '\n', '\n', '\n', 'Enter');

// row 4
const shiftLeft = new Key('ShiftLeft', '', '', '', '', 'Shift');
const keyZ = new Key('KeyZ', 'z', 'Z', 'я', 'Я');
const keyX = new Key('KeyX', 'x', 'X', 'ч', 'Ч');
const keyC = new Key('KeyC', 'c', 'C', 'с', 'С');
const keyV = new Key('KeyV', 'v', 'V', 'м', 'М');
const keyB = new Key('KeyB', 'b', 'B', 'и', 'И');
const keyN = new Key('KeyN', 'n', 'N', 'т', 'Т');
const keyM = new Key('KeyM', 'm', 'M', 'ь', 'Ь');
const comma = new Key('Comma', ',', '<', 'б', 'Б');
const period = new Key('Period', '.', '>', 'ю', 'Ю');
const slash = new Key('Slash', '/', '?', '.', ',');
const arrowUp = new Key('ArrowUp', '▲', '▲', '▲', '▲');
const shiftRight = new Key('ShiftRight', '', '', '', '', 'Shift');

// row 5
const controlLeft = new Key('ControlLeft', '', '', '', '', 'ctrl');
const metaLeft = new Key('MetaLeft', '', '', '', '', 'win'); // надо ли она??
const altLeft = new Key('AltLeft', '', '', '', '', 'alt');
const space = new Key('Space', ' ', ' ', ' ', ' ');
const altRight = new Key('AltRight', '', '', '', '', 'alt');
const arrowLeft = new Key('ArrowLeft', '◄', '◄', '◄', '◄');
const arrowDown = new Key('ArrowDown', '▼', '▼', '▼', '▼');
const arrowRight = new Key('ArrowRight', '►', '►', '►', '►');
const controlRight = new Key('ControlRight', '', '', '', '', 'ctrl');

// rows arrays
const keysOfRow1 = [];
const keysOfRow2 = [];
const keysOfRow3 = [];
const keysOfRow4 = [];
const keysOfRow5 = [];

function addKeysToArray(key, arrayOfKeys) {   // добавление кнопок(объектов) в массив
	arrayOfKeys.push(key);
}

// row 1
addKeysToArray(backquote, keysOfRow1);
addKeysToArray(digit1, keysOfRow1);
addKeysToArray(digit2, keysOfRow1);
addKeysToArray(digit3, keysOfRow1);
addKeysToArray(digit4, keysOfRow1);
addKeysToArray(digit5, keysOfRow1);
addKeysToArray(digit6, keysOfRow1);
addKeysToArray(digit7, keysOfRow1);
addKeysToArray(digit8, keysOfRow1);
addKeysToArray(digit9, keysOfRow1);
addKeysToArray(digit0, keysOfRow1);
addKeysToArray(minus, keysOfRow1);
addKeysToArray(equal, keysOfRow1);
addKeysToArray(backspace, keysOfRow1);
// row 2
addKeysToArray(tab, keysOfRow2);
addKeysToArray(keyQ, keysOfRow2);
addKeysToArray(keyW, keysOfRow2);
addKeysToArray(keyE, keysOfRow2);
addKeysToArray(keyR, keysOfRow2);
addKeysToArray(keyT, keysOfRow2);
addKeysToArray(keyY, keysOfRow2);
addKeysToArray(keyU, keysOfRow2);
addKeysToArray(keyI, keysOfRow2);
addKeysToArray(keyO, keysOfRow2);
addKeysToArray(keyP, keysOfRow2);
addKeysToArray(bracketLeft, keysOfRow2);
addKeysToArray(bracketRight, keysOfRow2);
addKeysToArray(backslash, keysOfRow2);
// addKeysToArray(Delete, keysOfRow2);
// row 3
addKeysToArray(capsLock, keysOfRow3);
addKeysToArray(keyA, keysOfRow3);
addKeysToArray(keyS, keysOfRow3);
addKeysToArray(keyD, keysOfRow3);
addKeysToArray(keyF, keysOfRow3);
addKeysToArray(keyG, keysOfRow3);
addKeysToArray(keyH, keysOfRow3);
addKeysToArray(keyJ, keysOfRow3);
addKeysToArray(keyK, keysOfRow3);
addKeysToArray(keyL, keysOfRow3);
addKeysToArray(semicolon, keysOfRow3);
addKeysToArray(quote, keysOfRow3);
addKeysToArray(enter, keysOfRow3);
// row 4
addKeysToArray(shiftLeft, keysOfRow4);
addKeysToArray(keyZ, keysOfRow4);
addKeysToArray(keyX, keysOfRow4);
addKeysToArray(keyC, keysOfRow4);
addKeysToArray(keyV, keysOfRow4);
addKeysToArray(keyB, keysOfRow4);
addKeysToArray(keyN, keysOfRow4);
addKeysToArray(keyM, keysOfRow4);
addKeysToArray(comma, keysOfRow4);
addKeysToArray(period, keysOfRow4);
addKeysToArray(slash, keysOfRow4);
addKeysToArray(arrowUp, keysOfRow4);
addKeysToArray(shiftRight, keysOfRow4);
// row 5
addKeysToArray(controlLeft, keysOfRow5);
addKeysToArray(metaLeft, keysOfRow5);
addKeysToArray(altLeft, keysOfRow5);
addKeysToArray(space, keysOfRow5);
addKeysToArray(altRight, keysOfRow5);
addKeysToArray(arrowLeft, keysOfRow5);
addKeysToArray(arrowDown, keysOfRow5);
addKeysToArray(arrowRight, keysOfRow5);
addKeysToArray(controlRight, keysOfRow5);

const $body = document.body;

const $wrapper = document.createElement('div');
$wrapper.classList.add('wrapper');

const $title = document.createElement('p');
$title.classList.add('title');
$title.textContent = 'RSS Виртуальная клавиатура';

const $description = document.createElement('p');
$description.classList.add('description');
$description.textContent = 'Клавиатура создана в ОС Windows';

const $descriptionLang = document.createElement('p');
$descriptionLang.classList.add('description');
$descriptionLang.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

const $lang = document.createElement('p');
$lang.classList.add('lang');

if (localStorage.isLanguageEng === 'true') {
	$lang.textContent = 'Language: English';
} else if (localStorage.isLanguageEng === 'false') {
	$lang.textContent = 'Язык: Русский';
} else {
	$lang.textContent = 'English';
}

const $textArea = document.createElement('textarea');
$textArea.classList.add('textarea');
$textArea.disabled = true;


const $keyboardWrapper = document.createElement('div');
$keyboardWrapper.classList.add('keyboard');

$body.prepend($wrapper);
$wrapper.append($title, $textArea, $lang, $keyboardWrapper, $description, $descriptionLang);

function createRows() {			// создание строки
	const $keyboardRow = document.createElement('div');
	$keyboardRow.classList.add('keyboard__row');
	$keyboardWrapper.append($keyboardRow);
	return $keyboardWrapper;
}

for (let i = 0; i < 5; i++) {
	createRows();
}

const allRows = [];
allRows.push(keysOfRow1, keysOfRow2, keysOfRow3, keysOfRow4, keysOfRow5);

const $rows = document.querySelectorAll('.keyboard__row');   // массив строк

for (let i = 0; i < 5; i++){
	for (let key of allRows[i]) {
		key.createKey($rows[i]);
	}
}

function hideSpan(spans) {
	for (let span of spans) {
		span.classList.add('hidden');
	}
}

function showSpan(spans) {
	for (let span of spans) {
		span.classList.remove('hidden');
	}
}

let isLanguageEng;

if (localStorage.isLanguageEng === 'true') {
	isLanguageEng = true;
} else if (localStorage.isLanguageEng === 'false') {
	isLanguageEng = false;
} else {
	isLanguageEng = true;
}

const engLetters = document.querySelectorAll('.eng');
const rusLetters = document.querySelectorAll('.rus');

const engLettersUp = document.querySelectorAll('.eng_up');
const engLettersDown = document.querySelectorAll('.eng_down');

const rusLettersUp = document.querySelectorAll('.rus_up');
const rusLettersDown = document.querySelectorAll('.rus_down');

if (isLanguageEng) {
	hideSpan(rusLetters);
	showSpan(engLetters);
} else {
	hideSpan(engLetters);
	showSpan(rusLetters);
}

let allKeys = document.querySelectorAll('.key');  // DIVы

let isCaseLower = true;

let previousEventCode;

$body.onkeydown = function (e) {

	// менять язык
	if (((previousEventCode === 'ControlLeft') && (e.code === 'AltLeft')) ||
		((previousEventCode === 'AltLeft') && (e.code === 'ControlLeft'))) {

		isLanguageEng = !isLanguageEng;

		localStorage.isLanguageEng = isLanguageEng;
		localStorage.setItem(isLanguageEng, isLanguageEng);

		if (isLanguageEng) {
			hideSpan(rusLetters);
			showSpan(engLetters);
		} else {
			hideSpan(engLetters);
			showSpan(rusLetters);				
		}

		isLanguageEng ? $lang.textContent = 'Language: English' : $lang.textContent = 'Язык: Русский';
	}

	// lower/upper case
	if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') &&
		(previousEventCode === 'ShiftLeft' || previousEventCode === 'ShiftRight')) {
	} else if (e.code === 'CapsLock' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
		isCaseLower = !isCaseLower;
	}
	if (isCaseLower) {
		hideSpan(engLettersUp);
		hideSpan(rusLettersUp);
		showSpan(engLettersDown);
		showSpan(rusLettersDown);
	} else {
		showSpan(engLettersUp);
		showSpan(rusLettersUp);
		hideSpan(engLettersDown);
		hideSpan(rusLettersDown);
	}

	// ввод букв в текстареа и добавления класса 'active' нажатой клавише
	for (let div of allKeys) {

		if (div.classList.value.includes(e.code)) {
			div.classList.add('active');
		}

		// берем значение того дива, в котором есть значение равное Е-коду нажатой кнопки. Смотрим не сервисная ли кнопка
		if (div.classList.value.includes(e.code) && !div.lastChild.classList.value.includes('service_key')) {

			if (isLanguageEng && isCaseLower) {
				$textArea.value += div.firstChild.firstChild.textContent;
			} else if (isLanguageEng && !isCaseLower) {
				$textArea.value += div.firstChild.lastChild.textContent;
			} else if (!isLanguageEng && isCaseLower) {
				$textArea.value += div.lastChild.firstChild.textContent;
			} else if (!isLanguageEng && !isCaseLower) {
				$textArea.value += div.lastChild.lastChild.textContent;
			}

		} else if (div.classList.value.includes(e.code) && e.code === 'Enter') {
			$textArea.value += '\n';
		} else if (div.classList.value.includes(e.code) && e.code === 'Backspace') {
			$textArea.value = $textArea.value.slice(0, $textArea.value.length - 1);
		} else if (div.classList.value.includes(e.code) && e.code === 'Tab') {
			e.preventDefault();
			$textArea.value += '\t';
		} else if (div.classList.value.includes(e.code) && e.code === 'AltRight' ||
			div.classList.value.includes(e.code) && e.code === 'AltLeft' ||
			div.classList.value.includes(e.code) && e.code === 'MetaLeft') {
			e.preventDefault();

		}
	}

	previousEventCode = e.code;
}

$body.onkeyup = function (e) {
	previousEventCode = '';

	if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
		isCaseLower = !isCaseLower;
	}

	if (isCaseLower) {
		hideSpan(engLettersUp);
		hideSpan(rusLettersUp);
		showSpan(engLettersDown);
		showSpan(rusLettersDown);
	} else {
		showSpan(engLettersUp);
		showSpan(rusLettersUp);
		hideSpan(engLettersDown);
		hideSpan(rusLettersDown);
	}

	for (let div of allKeys) {
		if (div.classList.value.includes(e.code)) {
			div.classList.remove('active');
		}
	}
}

// События мыши
$wrapper.onmousedown = function (event) {
	let targetKey = event.target.closest('div');

	if (targetKey.classList.value.split(' ').includes('key')) {
		targetKey.classList.add('active');
	}

	if (targetKey.classList.value.split(' ').includes('key') &&
		targetKey.firstChild.classList.value !== 'service_key') {

		if (isLanguageEng && isCaseLower) {
			$textArea.value += targetKey.firstChild.firstChild.textContent;
		} else if (isLanguageEng && !isCaseLower) {
			$textArea.value += targetKey.firstChild.lastChild.textContent;
		} else if (!isLanguageEng && isCaseLower) {
			$textArea.value += targetKey.lastChild.firstChild.textContent;
		} else if (!isLanguageEng && !isCaseLower) {
			$textArea.value += targetKey.lastChild.lastChild.textContent;
		}

	} else if (targetKey.classList.value.split(' ').includes('Enter')) {
		$textArea.value += '\n';
	} else if (targetKey.classList.value.split(' ').includes('Backspace')) {
		$textArea.value = $textArea.value.slice(0, $textArea.value.length - 1);
	} else if (targetKey.classList.value.split(' ').includes('Tab')) {
		$textArea.value += '\t';
	}
}

$wrapper.onmouseup = function (event) {
	let targetKey = event.target.closest('div');
	if (targetKey.classList.value.split(' ').includes('key')) {
		targetKey.classList.remove('active');
	}
}
// HOVER
$wrapper.onmouseover = function (event) {
	let targetKey = event.target.closest('div');
	if (targetKey.classList.value.split(' ').includes('key')) {
		targetKey.classList.add('key_hover');
	} else {
		return
	}
}

$wrapper.onmouseout = function (event) {
	let targetKey = event.target.closest('div');
	if (targetKey.classList.value.split(' ').includes('key')) {
		targetKey.classList.remove('key_hover');
		targetKey.classList.remove('active');
	}
}
