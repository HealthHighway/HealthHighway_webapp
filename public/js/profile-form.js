//Form Code

//Init
// const ep_btn = document.querySelector('.edit-profile')
const main_form = document.querySelector('.os-form')
window.HH_Profile={};

//buttons
const osf_ailBtns = document.querySelectorAll('.osf-ail')
const osf_proffBtns = document.querySelectorAll('.osf-proff')
const osf_langBtns = document.querySelectorAll('.osf-lang')

const osf_serviceBtns = document.querySelectorAll('.osf-service')
const osf_healBtn = document.querySelector('.osf-heal')
const osf_notSureBtn = document.querySelector('.osf-ns') //used

const osf_backBtn = document.querySelector('.osf-back-button')
const osf_closeBtn = document.querySelector('.osf-close-button')

//stages
const osf_stages = document.querySelectorAll('.osf-content') //used

const osf_service = document.querySelector('#choose-service') //used
const osf_ailments = document.querySelector('#choose-ailment') //used
const osf_problem = document.querySelector('#not-sure') //used
const osf_basicInfo = document.querySelector('#basic-info') //used
const osf_weight_height = document.querySelector('#weight-height') //used
const osf_proff = document.querySelector('#choose-profession') //used
const osf_lang = document.querySelector('#choose-lang') //used





//forms
const osf_form_problem = document.querySelector('.osf-form-problem') //used
const osf_form_basic = document.querySelector('.osf-form-basicinfo') //used
const osf_form_contact = document.querySelector('.osf-form-contact') //used




//other

const customProgressBar = document.querySelector('.progress-bar') //used


// btn event listeners
osf_closeBtn.addEventListener('click', () => {
    document.querySelector('.container-for-form').classList.remove('active');
    osf_goToStage(osf_service, '15%')
})


// ep_btn.addEventListener('click', (e) => { //makes form modal visible
//     e.preventDefault();
//     document.querySelector('.container-for-form').classList.add('active');
//     main_form.style.display = "grid";
// })

function openProfileForm(){
    document.querySelector('.container-for-form').classList.add('active');
    main_form.style.display = "grid";
}

for (let btn of osf_ailBtns) {
    btn.addEventListener('click', () => {
        osf_goToStage(osf_basicInfo, '45%')
    })
}
for (let btn of osf_serviceBtns) {
    btn.addEventListener('click', () => {
        osf_goToStage(osf_basicInfo, '45%')
    })
}
for (let btn of osf_proffBtns) {
    btn.addEventListener('click', () => {
        osf_goToStage(osf_lang, '100%')
    })
}
for (let btn of osf_langBtns) {
    btn.addEventListener('click', async () => {
        document.querySelector('.container-for-form').classList.remove('active');
        osf_goToStage(osf_service, '15%')
        console.log(window.HH_Profile);
        saveProfile();
    })
}



osf_healBtn.addEventListener('click', () => {
    osf_goToStage(osf_ailments, '30%')
})

osf_notSureBtn.addEventListener('click', () => {
    osf_goToStage(osf_problem, '40%')
})

osf_backBtn.addEventListener('click', () => {
    if (osf_isActive(osf_lang)) {
        osf_goToStage(osf_proff, '80%')
    } else if (osf_isActive(osf_proff)) {
        osf_goToStage(osf_weight_height, '60%')
    } else if (osf_isActive(osf_weight_height)) {
        osf_goToStage(osf_basicInfo, '45%')
    } else if (osf_isActive(osf_basicInfo)) {
        osf_goToStage(osf_service, '15%')
    } else if (osf_isActive(osf_problem)) {
        osf_goToStage(osf_service, '15%')
    } else if (osf_isActive(osf_ailments)) {
        osf_goToStage(osf_service, '15%')
    } else if (osf_isActive(osf_service)) {
        document.querySelector('.container-for-form').classList.remove('active')
    }

})




// form event listeners
osf_form_problem.addEventListener('submit', (e) => {
    e.preventDefault();
    let problemcustom = document.getElementById("osf-problem").value;
    if (problemcustom.length <= 2) {
        document.getElementById('osf-invalid-problem').style.display = "block";
    } else {
        osf_goToStage(osf_basicInfo, '45%')
    }
    window.HH_Profile.PROBLEM = document.querySelector('#osf-problem').value;
})
osf_form_basic.addEventListener('submit', (e) => {
    e.preventDefault();
    let age = document.getElementById("osf-age").value;
    window.HH_Profile.AGE=age;
    if (age.length == 0 || Number(age) <= 0 || Number(age) > 100 || isNaN(age)) {
        document.getElementById('osf-invalid-age').style.display = "block";
    } else {
        osf_goToStage(osf_weight_height, '60%')
    }
})
osf_form_contact.addEventListener('submit', (e) => {
    e.preventDefault();
    let weight = document.getElementById("osf-weight").value;
    let height = document.getElementById("osf-height").value;
    window.HH_Profile.WEIGHT=weight;
    window.HH_Profile.HEIGHT=height;
    if (weight.length == 0 || Number(weight) <= 0 || isNaN(weight)) {
        document.getElementById('osf-invalid-weight').style.display = "block";
    }
    if (height.length == 0) {
        document.getElementById('osf-invalid-height').style.display = "block";
    } else {
        osf_goToStage(osf_proff, '80%')
    }
})






// functions
function osf_isActive(stage_name) {
    if (stage_name.classList.contains('active-state')) {
        return true
    } else {
        return false
    }
}


function osf_goToStage(stage_name, percent) {
    if (!stage_name.classList.contains('active-state')) {
        osf_stages.forEach((stage) => stage.classList.remove('active-state'));
        stage_name.classList.add('active-state');

    }
    if (!osf_service.classList.contains('active-state')) {
        osf_service.style.display = "none"
    } else if (osf_service.classList.contains('active-state')) {
        osf_service.style.display = "flex"
    }




    customProgressBar.style.minWidth = percent


    const totalSteps = osf_stages.length;
    document.querySelector('#total-steps').innerHTML = totalSteps.toString();

    if (osf_isActive(osf_service)) {
        document.querySelector('#step').innerHTML = '1';
    } else if (osf_isActive(osf_ailments)) {
        document.querySelector('#step').innerHTML = '2';
    } else if (osf_isActive(osf_problem)) {
        document.querySelector('#step').innerHTML = '3';
    } else if (osf_isActive(osf_basicInfo)) {
        document.querySelector('#step').innerHTML = '4';
    }

}