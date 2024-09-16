// Loading page

const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(() => {
    spinnerWrapperEl.style.display = 'none';
    }, 1000);
});
// TODO: questions

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');
    })
})
// active navlinks
const link = document.querySelector('.nav-link');
link.addEventListener('click', () => {
    link.classList.toggle('active');
    
})





