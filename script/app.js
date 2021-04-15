const btn_chBackground = document.querySelector('body');
const firstname_input = document.querySelector('#firstname')
const lastname_input = document.querySelector('#lastname')
const progname_input = document.querySelector('#progName')
const form_arr = [{}]

function handleClick(e) {
    e.stopPropagation();
    if (e.target.innerHTML === 'Change Background Color') {
        changeBackground();
    } else if (e.target.innerHTML === 'Submit') {
        //save to object
        saveObject();
        //clear text
        cls();
    } else {
        return;
    }
}

function changeBackground() {
    btn_chBackground.classList.toggle('body');
}

function saveObject() {
    form_arr.push({
        [firstname_input.id]: firstname_input.value,
        [lastname_input.id]: lastname_input.value,
        [progname_input.id]: progname_input.value
    });

    console.log(form_arr);
}

function cls() {
    firstname_input.value = '';
    lastname_input.value = '';
    progname_input.value = '';
}

// add event listener
document.body.addEventListener('click', handleClick);