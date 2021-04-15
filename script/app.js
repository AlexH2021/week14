const btn_chBackground = document.querySelector('body');
const firstname_input = document.querySelector('#firstname');
const lastname_input = document.querySelector('#lastname');
const progname_input = document.querySelector('#progName');
const list_program = document.querySelectorAll('#list-wrapper ul');
const form_arr = []

function handleClick(e) {
    let studentObj = {
        [firstname_input.id]: firstname_input.value,
        [lastname_input.id]: lastname_input.value,
        [progname_input.id]: progname_input.value
    }

    e.stopPropagation();
    if (e.target.innerHTML === 'Change Background Color') {
        changeBackground();
    } else if (e.target.innerHTML === 'Submit') {
        //save to object
        if (firstname_input.value === '') {
            return;
        }
        if (form_arr.length === 0) {
            saveObject(studentObj);
            addtoList(studentObj);
        } else {
            if (!checkExist(studentObj)) {
                saveObject(studentObj);
                addtoList(studentObj);
            } else {
                console.log('exist');
            }
        }

        //clear text
        cls();
    } else {
        return;
    }
}

function checkExist(newStudent) {
    flag = false;

    for (item of form_arr) {
        if (newStudent.value === item.firstname && newStudent.value === item.lastname) {
            return flag = true;
        } else {
            return flag = false;
        }
    }
}

function addtoList(newStudent) {
    let listelement = document.createElement('li');
    listelement.textContent = `${newStudent.firstname} ${newStudent.lastname}`

    if (newStudent.progName.toUpperCase() === 'CIT') {
        let CITList = document.querySelector('#CIT')
        CITList.appendChild(listelement);
    } else if (newStudent.progName.toUpperCase() === 'CST') {
        let CSTList = document.querySelector('#CST')
        CSTList.appendChild(listelement);
    }
}

function changeBackground() {
    btn_chBackground.classList.toggle('body');
}

function saveObject(newStudent) {
    form_arr.push(newStudent);

    console.log(form_arr);
}

function editObject(newStudent) {
    newStudent[progname_input.id] = progname_input.value
    console.log(form_arr);
}

function cls() {
    firstname_input.value = '';
    lastname_input.value = '';
    progname_input.value = '';
}

// add event listener
document.body.addEventListener('click', handleClick);