1) Задача на рефакторинг

function func1(str, a, b) {
    if (str === "") {
        return -1
    }
    let strReversed = (str.split("").reverse().join(""))
    if (strReversed.indexOf(a) !== -1) {
        if (strReversed.indexOf(b) !== -1) {
            if (strReversed.indexOf(a) > strReversed.indexOf(b)) {
                return (strReversed.length - strReversed.indexOf(b) - 1)
            } else if (strReversed.indexOf(a) < strReversed.indexOf(b)) {
                return (strReversed.length - strReversed.indexOf(a) - 1)
            }
        } else {
            return (strReversed.length - strReversed.indexOf(a) - 1)
        }
    }
    if (strReversed.indexOf(b) !== -1) {
        return (strReversed.length - strReversed.indexOf(b) - 1)
    } else return -1;
}


2) Web приложение - терминал оплаты мобильного телефона
<a href="https://test-task-bravedevelopers.vercel.app/" target="_blank">Web-приложение</a>
