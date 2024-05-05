function isEmpty(string) {
    if (/^[\s\t\r\n]*$/.test(string)) {
        return true;
    }

    return false;
}

function checkEmail(object, message) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    let string = object.value;
    let errorField = "e_" + object.name.substr(2, object.name.length);

    if (email.test(string)) {
        document.querySelector(`#${errorField}`).innerHTML = '';
        document.querySelector(`#${errorField}`).style.display = "none";
        return true;
    } else {
        document.querySelector(`#${errorField}`).innerHTML = message;
        document.querySelector(`#${errorField}`).style.display = "block";
        object.focus();
        return false;
    }
}

function checkString(object, message) {
    let string = object.value;
    let errorField = "e_" + object.name.substr(2, object.name.length);
    // if string is empty or consists only of white characters return false
    if (isEmpty(string)) {
        document.querySelector(`#${errorField}`).innerHTML = message;
        document.querySelector(`#${errorField}`).classList.remove("hidden");
        object.focus();
        return false;
    } else {
        document.querySelector(`#${errorField}`).innerHTML = '';
        document.querySelector(`#${errorField}`).classList.add("hidden");
        return true;
    }
}

const validate = (form) => {
    // note the '!' sign here
    let validate = checkString(form.elements["f_imie"], "Podaj imię!");
    validated = checkString(form.elements["f_nazwisko"], "Podaj nazwisko!") && validate;
    validate = checkString(form.elements["f_kod"], "Podaj kod pocztowy!") && validate;
    validate = checkString(form.elements["f_ulica"], "Podaj ulicę!") && validate;
    validate = checkString(form.elements["f_miasto"], "Podaj miasto!") && validate
    validate = checkEmail(form.elements["f_email"], "Niepoprawny adres e-mail!") && validate;
    if (!validate) {
        return false;
    }

    return true;
}

document.querySelector('.submit-button').addEventListener('click', function() {
    if (validate(this.form)) {
        this.form.submit();
    }
});

document.querySelector('input[value="f_m"]').addEventListener('click', function() {
    document.querySelector("#nazwisko_panienskie").classList.add("hidden");
})

document.querySelector('input[value="f_k"]').addEventListener('click', function() {
    document.querySelector("#nazwisko_panienskie").classList.remove("hidden");
})


//  Zadanie 27-29
function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
        e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}
alterRows(1, document.getElementsByTagName('tr')[0]);

// Zadanie 30-31
function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}
function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}
function swapRows(b) {
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

document.querySelector(".change-button").addEventListener("click", function() {
    swapRows(document.querySelector(".change-button"));
})

// Zadanie 33
function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}
    