const questions = document.querySelectorAll(".question");
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".previous-btn");

nextBtn.addEventListener('click', function() {

    let currQuestionNumb;

    for(let i=0; i<questions.length; i++) {

        const currQuestionClassName = questions[i].className;

        if(currQuestionClassName.includes('active')) {

            currQuestionNumb = Number(currQuestionClassName.charAt(1));

            questions[i].classList.remove('active');

            questions[i].classList.add('hidden');

            break;        
        }
    }
    if(currQuestionNumb === questions.length) {

        questions[0].classList.remove('hidden');

        questions[0].classList.add('active');

    }  else {
        questions[currQuestionNumb].classList.remove('hidden');

        questions[currQuestionNumb].classList.add('active');
    }  
})

previousBtn.addEventListener('click', function() {

    let currQuestionNumb;

    for(let i=0; i<questions.length; i++) {

        const currQuestionClassName = questions[i].className;

        if(currQuestionClassName.includes('active')) {

            currQuestionNumb = Number(currQuestionClassName.charAt(1));

            questions[i].classList.remove('active');

            questions[i].classList.add('hidden');

            break;        
        }
    }
    if(currQuestionNumb === 1) {

        questions[questions.length-1].classList.remove('hidden');

        questions[questions.length-1].classList.add('active');
    }  else {

        questions[currQuestionNumb-2].classList.remove('hidden');

        questions[currQuestionNumb-2].classList.add('active');
    }  
})

const controllers = [
    new AbortController(),
    new AbortController(),
    new AbortController(),
    new AbortController(),
    new AbortController()
]

questions[0].addEventListener('click', function (e) {

    if(e.target.className.includes('option-true')) {

        e.target.style.backgroundColor = 'green';
        controllers[0].abort();

    } else if(e.target.className.includes('option-false')) {

        e.target.style.backgroundColor = 'red';
        controllers[0].abort();
    }

}, {signal:controllers[0].signal});

questions[1].addEventListener('click', function (e) {

    if(e.target.className.includes('option-true')) {

        e.target.style.backgroundColor = 'red';
        controllers[1].abort();

    } else if(e.target.className.includes('option-false')) {

        e.target.style.backgroundColor = 'green';
        controllers[1].abort();
    }

}, {signal:controllers[1].signal});

questions[2].addEventListener('click', function (e) {

    if(e.target.className.includes('option-true')) {
        
        e.target.style.backgroundColor = 'red';
        controllers[2].abort();

    } else if(e.target.className.includes('option-false')) {

        e.target.style.backgroundColor = 'green';
        controllers[2].abort();
    }

}, {signal:controllers[2].signal});

questions[3].addEventListener('click', function (e) {

    if(e.target.className.includes('option-true')) {

        e.target.style.backgroundColor = 'green';
        controllers[3].abort();

    } else if(e.target.className.includes('option-false')) {

        e.target.style.backgroundColor = 'red';
        controllers[3].abort();
    }

}, {signal:controllers[3].signal});


questions[4].addEventListener('click', function (e) {

    if(e.target.className.includes('option-true')) {

        e.target.style.backgroundColor = 'red';
        controllers[4].abort();

    } else if(e.target.className.includes('option-false')) {

        e.target.style.backgroundColor = 'green';
        controllers[4].abort();
    }
}, {signal:controllers[4].signal});


