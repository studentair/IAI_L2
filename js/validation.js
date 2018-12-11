let send = document.querySelector(".btn-primary");
send.addEventListener("click", checkForm);

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function checkForm() {

    let age = document.querySelector("#exampleInputAge");
    let name = document.querySelector("#exampleInputName");
    let surname = document.querySelector("#exampleInputSurname");
    let email = document.querySelector("#exampleInputEmail1");
    let checkRadio = document.querySelectorAll(".form-check-input");

    let iage = document.querySelector("#iexampleInputAge");
    let iname = document.querySelector("#iexampleInputName");
    let isurname = document.querySelector("#iexampleInputSurname");
    let iemail = document.querySelector("#iexampleInputEmail1");


    let ageValue = age.value;
    let nameValue = name.value;
    let surnameValue = surname.value;
    let emailValue = email.value;

    var atpos = emailValue.indexOf("@");
    var dotpos = emailValue.lastIndexOf(".");

    if (ageValue === '' || !parseInt(ageValue) || isNaN(ageValue) || ageValue < 1 || ageValue > 100)
    {
        addClass(age, 'is-invalid');
        addClass(iage, 'invalid-feedback');
        removeClass(age, 'is-valid');
        removeClass(iage, 'valid-feedback');
        iage.innerHTML="Please provide a valid date.";
    }
    else
    {
        removeClass(age, 'is-invalid');
        removeClass(iage, 'invalid-feedback');
        addClass(age, 'is-valid');
        addClass(iage, 'valid-feedback');
        iage.innerHTML="Looks good!";
    }

    if(nameValue === '' || parseInt(nameValue))
    {
        addClass(name, 'is-invalid');
        addClass(iname, 'invalid-feedback');
        removeClass(name, 'is-valid');
        removeClass(iname, 'valid-feedback');
        iname.innerHTML="Please provide a valid date.";
    }
    else
    {
        removeClass(name, 'is-invalid');
        removeClass(iname, 'invalid-feedback');
        addClass(name, 'is-valid');
        addClass(iname, 'valid-feedback');
        iname.innerHTML="Looks good!";
    }

    if(surnameValue === '' || parseInt(surnameValue))
    {
        addClass(surname, 'is-invalid');
        addClass(isurname, 'invalid-feedback');
        removeClass(surname, 'is-valid');
        removeClass(isurname, 'valid-feedback');
        isurname.innerHTML="Please provide a valid date.";
    }
    else
    {
        removeClass(surname, 'is-invalid');
        removeClass(isurname, 'invalid-feedback');
        addClass(surname, 'is-valid');
        addClass(isurname, 'valid-feedback');
        isurname.innerHTML="Looks good!";
    }

    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailValue.length)
    {
        addClass(email, 'is-invalid');
        addClass(iemail, 'invalid-feedback');
        removeClass(email, 'is-valid');
        removeClass(iemail, 'valid-feedback');
        iemail.innerHTML="Please provide a valid date.";
    }
    else
    {
        removeClass(email, 'is-invalid');
        removeClass(iemail, 'invalid-feedback');
        addClass(email, 'is-valid');
        addClass(iemail, 'valid-feedback');
        iemail.innerHTML="Looks good!";
    }

    if(checkRadio[0].checked)
    {
        addClass(checkRadio[0], 'is-valid');
        removeClass(checkRadio[0], 'is-invalid');
    }
    else if(checkRadio[1].checked)
    {
        addClass(checkRadio[1], 'is-valid');
        removeClass(checkRadio[1], 'is-invalid');
    }
    else
    {
        addClass(checkRadio[0], 'is-invalid');
        removeClass(checkRadio[0], 'is-valid');
        addClass(checkRadio[1], 'is-invalid');
        removeClass(checkRadio[1], 'is-valid');
    }

}
