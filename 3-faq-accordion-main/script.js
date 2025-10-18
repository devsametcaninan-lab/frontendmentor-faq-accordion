// Get all elements with class
const acc = document.querySelectorAll('.accordion');
const panels = document.querySelectorAll('.panel');
const minusIcons = document.querySelectorAll('.minus-icon');
const plusIcons = document.querySelectorAll('.plus-icon');

acc.forEach(btn =>{
    btn.onclick = (e) => {
        for (let i = 0; i < acc.length; i++) {
            if (e.target === acc[i]) {
                panels[i].classList.toggle('active');
                minusIcons[i].classList.toggle('active');
                plusIcons[i].classList.toggle('active');
            }
        }
    }
})

// Get the element with id="defaultOpen" and click on it
document.querySelector('#defaultOpen').click();