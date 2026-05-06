var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var NoButton=document.querySelector('.modal__action.modal__action--negative');


for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}  

NoButton.addEventListener('click', function() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
  

});




// if (NoButton) {
//     NoButton.addEventListener('click', closeModal);
// }

// backdrop.addEventListener('click', closeModal);

// function closeModal() {
//     if (modal) {
//         modal.style.display = 'none';
//     }
//     if (backdrop) {
//         backdrop.style.display = 'none';
//     }
// }
