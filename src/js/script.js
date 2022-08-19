window.onload = evt => {
    const popUp = document.querySelector('.popup');
    popupOpen(popUp);
    evt.preventDefault();
}

const popupLinks = document.querySelector('.popup_link'); //Add querquerySelectorAll for more than one popup element
const body = document.querySelector('body');

let unlock = true;


// This block for more than one popup element, dont forget to commit a single one querySelector
/*if(popupLinks.length > 0){
    for (let index=0; index<popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", evt => {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            evt.preventDefault();
        })
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length>0){
    for(let index=0; index< popupCloseIcon.length; index++){
        const el = popupCloseIcon[index];
        el.addEventListener('click', evt => {
            popupClose(el.closest('.popup'));
            evt.preventDefault();
        })
    }
}*/

popupLinks.addEventListener('click', evt => {
    const popUp = document.querySelector('.popup');
    popupOpen(popUp);
    evt.preventDefault();
})



const popupCloseIcon = document.querySelector('.close-popup');

popupCloseIcon.addEventListener('click', evt => {
    popupClose(popupCloseIcon.closest('.popup'));
    evt.preventDefault();
});

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', evt => {
            if (!evt.target.closest('.popup_content')) {
                popupClose(evt.target.closest('.popup'))
            }
        });
    }
}

function popupClose(popupActive){
    popupActive.classList.remove('open');
}
document.addEventListener('keydown', evt=>{
    if(evt.key === 'Escape'){
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
})