let container = document.querySelector('.container');
const bar = document.querySelector('.bar');

//showing the navbar
bar.addEventListener('click',(e) => {
    if(container.style.display == 'flex'){
        container.style.display = 'none';
        bar.classList.remove('fa-xmark');
        bar.classList.add('fa-bars');
        
    }
    else {
        container.style.display = 'flex';
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-xmark');
    }
})
